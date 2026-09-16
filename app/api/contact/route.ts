import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Contact enquiry routing
 */
const recipients: Record<string, string> = {
  "Healthcare Technology": "hello@fav.doctor",
  "Research & Implementation": "research@fav.doctor",
  "Health Insight": "hello@fav.doctor",
  Partnership: "partners@fav.doctor",
  "Healthcare Systems": "hello@fav.doctor",
  "General Enquiry": "hello@fav.doctor",
};

const allowedEnquiries = new Set(Object.keys(recipients));

/**
 * Simple in-memory rate limiter.
 *
 * Limit:
 * 5 submissions per IP
 * within 15 minutes.
 *
 * This is suitable for basic protection on a small deployment.
 * For distributed/serverless-scale protection, use a persistent
 * rate-limit store such as Upstash Redis later.
 */
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const rateLimitStore = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

/**
 * Escape user-controlled values before inserting them
 * into the HTML email.
 */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Basic email validation.
 */
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Get the visitor's IP address.
 *
 * Vercel provides x-forwarded-for for requests passing
 * through its infrastructure.
 */
function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

/**
 * Check whether this IP has exceeded the submission limit.
 */
function isRateLimited(ip: string) {
  const now = Date.now();

  const existing = rateLimitStore.get(ip);

  /**
   * No previous request.
   */
  if (!existing) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    });

    return false;
  }

  /**
   * Existing window has expired.
   */
  if (now >= existing.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    });

    return false;
  }

  /**
   * Too many requests.
   */
  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  /**
   * Increment request count.
   */
  existing.count += 1;
  rateLimitStore.set(ip, existing);

  return false;
}

/**
 * Occasionally remove expired entries so the Map
 * doesn't grow indefinitely during the lifetime
 * of a server process.
 */
function cleanupRateLimitStore() {
  const now = Date.now();

  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now >= entry.resetAt) {
      rateLimitStore.delete(ip);
    }
  }
}

export async function POST(request: Request) {
  try {
    /**
     * Make sure the Resend API key exists.
     */
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    /**
     * Rate limiting
     */
    cleanupRateLimitStore();

    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error:
            "Too many requests. Please wait a few minutes and try again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "900",
          },
        },
      );
    }

    /**
     * Parse request body.
     */
    const body = await request.json();

    /**
     * Extract and normalize values.
     */
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const organisation = String(
      body.organisation ?? "",
    ).trim();
    const phone = String(body.phone ?? "").trim();
    const enquiry = String(body.enquiry ?? "").trim();
    const message = String(body.message ?? "").trim();

    /**
     * Honeypot field.
     *
     * Genuine users should never fill this field.
     * Bots that automatically fill every input are rejected.
     */
    const website = String(body.website ?? "").trim();

    if (website) {
      console.warn(
        "Contact form honeypot triggered.",
      );

      return NextResponse.json(
        {
          error: "Unable to process your request.",
        },
        { status: 400 },
      );
    }

    /**
     * Required fields
     */
    if (
      !name ||
      !email ||
      !organisation ||
      !enquiry ||
      !message
    ) {
      return NextResponse.json(
        {
          error:
            "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    /**
     * Email validation
     */
    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    /**
     * Make sure the selected enquiry type
     * is one of our legitimate options.
     */
    if (!allowedEnquiries.has(enquiry)) {
      return NextResponse.json(
        {
          error:
            "Please select a valid enquiry type.",
        },
        { status: 400 },
      );
    }

    /**
     * Input length limits
     */
    if (name.length > 150) {
      return NextResponse.json(
        {
          error: "Name is too long.",
        },
        { status: 400 },
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        {
          error: "Email address is too long.",
        },
        { status: 400 },
      );
    }

    if (organisation.length > 200) {
      return NextResponse.json(
        {
          error: "Organisation name is too long.",
        },
        { status: 400 },
      );
    }

    if (phone.length > 50) {
      return NextResponse.json(
        {
          error: "Phone number is too long.",
        },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          error: "Message is too long.",
        },
        { status: 400 },
      );
    }

    /**
     * Determine destination inbox.
     */
    const recipient =
      recipients[enquiry] ?? "hello@fav.doctor";

    /**
     * Escape user-controlled values before putting
     * them into the HTML email.
     */
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeOrganisation =
      escapeHtml(organisation);
    const safePhone = escapeHtml(
      phone || "Not provided",
    );
    const safeEnquiry = escapeHtml(enquiry);
    const safeMessage = escapeHtml(message).replace(
      /\n/g,
      "<br />",
    );

    /**
     * Send email through Resend.
     */
    const { data, error } =
      await resend.emails.send({
        from:
          "FavDoctor Website <hello@mail.fav.doctor>",

        to: [recipient],

        /**
         * Clicking Reply in the received email
         * replies directly to the person who submitted
         * the enquiry.
         */
        replyTo: email,

        subject: `New Contact Enquiry: ${enquiry}`,

        html: `
          <div
            style="
              margin: 0;
              padding: 32px;
              background: #f8f8f8;
              font-family: Arial, Helvetica, sans-serif;
              color: #1f2937;
            "
          >
            <div
              style="
                max-width: 640px;
                margin: 0 auto;
                padding: 32px;
                background: #ffffff;
                border: 1px solid #e5e7eb;
                border-radius: 16px;
              "
            >
              <p
                style="
                  margin: 0 0 8px;
                  color: #6b4c9a;
                  font-size: 12px;
                  font-weight: 700;
                  letter-spacing: 2px;
                "
              >
                FAVDOCTOR WEBSITE
              </p>

              <h1
                style="
                  margin: 0 0 24px;
                  font-size: 24px;
                  line-height: 1.3;
                "
              >
                New Contact Enquiry
              </h1>

              <div
                style="
                  padding: 16px;
                  margin-bottom: 24px;
                  background: #f7f4fb;
                  border-radius: 12px;
                "
              >
                <strong>Enquiry Type</strong><br />
                ${safeEnquiry}
              </div>

              <p>
                <strong>Name:</strong><br />
                ${safeName}
              </p>

              <p>
                <strong>Email:</strong><br />
                ${safeEmail}
              </p>

              <p>
                <strong>Organisation:</strong><br />
                ${safeOrganisation}
              </p>

              <p>
                <strong>Phone:</strong><br />
                ${safePhone}
              </p>

              <hr
                style="
                  margin: 28px 0;
                  border: 0;
                  border-top: 1px solid #e5e7eb;
                "
              />

              <h2
                style="
                  margin: 0 0 12px;
                  font-size: 16px;
                "
              >
                Message
              </h2>

              <p
                style="
                  margin: 0;
                  line-height: 1.7;
                "
              >
                ${safeMessage}
              </p>
            </div>
          </div>
        `,
      });

    /**
     * Resend failed.
     */
    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error:
            "Unable to send your message. Please try again.",
        },
        { status: 500 },
      );
    }

    /**
     * Success
     */
    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(
      "Contact form error:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}