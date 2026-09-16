export const contact = {
  hero: {
    eyebrow: "GET IN TOUCH",
    title: "Let's Build Solutions That Matter.",
    description:
      "Whether you want to partner with FavDoctor, discuss a healthcare challenge, explore research or implementation support, or learn more about what we're building, we'd love to hear from you.",
  },

  form: {
    eyebrow: "START A CONVERSATION",
    title: "Tell Us What You're Working On.",
    description:
      "Every conversation starts with a challenge, an idea, or an opportunity. Tell us a little about yours, and we'll get back to you.",

    fields: {
      name: {
        label: "Full Name",
        placeholder: "Your full name",
      },
      email: {
        label: "Work Email",
        placeholder: "you@organisation.com",
      },
      organisation: {
        label: "Organisation",
        placeholder: "Your organisation",
      },
      phone: {
        label: "Phone Number",
        placeholder: "+234",
        optional: true,
      },
      enquiry: {
        label: "What can we help you with?",
        placeholder: "Select an option",
        options: [
          "Healthcare Technology",
          "Research & Implementation",
          "Health Insight",
          "Partnership",
          "Healthcare Systems",
          "General Enquiry",
        ],
      },
      message: {
        label: "Tell us more",
        placeholder:
          "Tell us about your organisation, challenge, idea, or what you'd like to explore with FavDoctor.",
      },
    },

    submitLabel: "Send Message",
    submittingLabel: "Sending...",
    successMessage:
      "Thank you for reaching out. We've received your message and will be in touch.",
    errorMessage:
      "Something went wrong while sending your message. Please try again.",
  },

  waysToWork: {
    eyebrow: "HOW WE CAN WORK WITH YOU",
    items: [
      {
        title: "Healthcare Systems",
        description:
          "Technology and implementation solutions for real healthcare challenges.",
      },
      {
        title: "Research & Implementation",
        description:
          "Support for research organisations moving evidence into real-world settings.",
      },
      {
        title: "Health Insight",
        description:
          "Population health programmes for organisations, communities, and gatherings.",
      },
      {
        title: "Partnerships",
        description:
          "Collaborate with us to build solutions that improve healthcare.",
      },
    ],
  },

  next: {
    eyebrow: "WHAT HAPPENS NEXT",
    title: "A Conversation, Not a Sales Pitch.",
    description:
      "We'll review your message and connect you with the right person at FavDoctor. From there, we'll understand what you're trying to solve and explore whether there's a meaningful way for us to help.",
    steps: [
      {
        number: "01",
        title: "You Reach Out",
        description:
          "Tell us about your organisation, idea, or challenge.",
      },
      {
        number: "02",
        title: "We Listen",
        description:
          "We learn about the problem and the people you're trying to serve.",
      },
      {
        number: "03",
        title: "We Explore",
        description:
          "Together, we determine whether there's a useful way to work together.",
      },
    ],
  },

  contactOptions: {
    eyebrow: "OTHER WAYS TO CONNECT",
    title: "Prefer a Direct Conversation?",
    description:
      "You can also reach the team directly through the channels below.",
    channels: [
      {
        label: "General Enquiries",
        email: "hello@fav.doctor",
      },
      {
        label: "Partnerships",
        email: "partners@fav.doctor",
      },
      {
        label: "Research",
        email: "research@fav.doctor",
      },
    ],
  },

  reach: {
    eyebrow: "WHERE WE WORK",
    title: "Built in Nigeria. Designed for Real-World Healthcare.",
    description:
      "Our work is rooted in Nigeria, with experience working across healthcare facilities, research programmes, communities, and organisations.",
  },

  finalCta: {
    eyebrow: "START THE CONVERSATION",
    title: "Have a Healthcare Challenge Worth Solving?",
    description: "Let's talk about it.",
    cta: {
      label: "Talk to FavDoctor",
      href: "#contact-form",
    },
  },
} as const;