import Link from "next/link";

import { Container } from "@/components/layout/container";
import { privacy } from "@/data/privacy";

export function PrivacyPolicyContent() {
  return (
    <section className="border-t border-border/60 bg-background">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[220px_1fr] lg:gap-20 lg:py-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold tracking-[0.16em] text-primary">
              ON THIS PAGE
            </p>

            <nav className="mt-5 space-y-3">
              {privacy.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm leading-6 text-muted-foreground transition-colors hover:text-brand-heading"
                >
                  {section.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </nav>
          </aside>

          <article className="max-w-3xl">
            {privacy.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-border/70 py-10 first:pt-0 last:border-b-0"
              >
                <h2 className="text-2xl font-bold tracking-[-0.025em] text-brand-heading sm:text-3xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-muted-foreground sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {"contact" in section && section.contact && (
                  <p className="mt-6 text-base leading-7 text-muted-foreground">
                    Email:{" "}
                    <Link
                      href={`mailto:${section.contact.email}`}
                      className="font-semibold text-brand-heading transition-colors hover:text-primary"
                    >
                      {section.contact.email}
                    </Link>
                  </p>
                )}
              </section>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
}