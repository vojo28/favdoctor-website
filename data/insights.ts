import { insightArticles, insightTopics } from "./insight-articles";
export const insights = {
  hero: {
    eyebrow: "FAVDOCTOR INSIGHTS",
    title: "Ideas, Evidence, and Perspectives on Better Healthcare.",
    description:
      "Exploring the challenges, ideas, evidence, and experiences shaping how healthcare can work better.",
  },

  featured: {
    eyebrow: "FEATURED INSIGHT",
    title:
      "What the U.S. Learned From 9/11 About Passenger Communication — and What Nigeria's Aviation System Can Learn",
    description:
      "A look at how communication became part of aviation safety after 9/11, and what that experience can teach us about keeping passengers informed during emergencies.",
    category: "HEALTHCARE SYSTEMS",
    date: "September 2026",
    readTime: "8 min read",
    image: {
      src: "/images/insights/featured.webp",
      alt: "Passengers and communication systems in an aviation environment",
    },
    href: "/insights/passenger-communication-aviation-safety-nigeria",
  },

  topics: {
  eyebrow: "EXPLORE BY TOPIC",
  title: "Explore Our Thinking.",
  topics: insightTopics,
},

  latest: {
  eyebrow: "LATEST INSIGHTS",
  title: "What We're Thinking About.",
  articles: insightArticles,
},

  perspectives: {
    eyebrow: "FROM FAVDOCTOR",
    title: "What We're Seeing. What We're Learning. What We're Questioning.",
    description:
      "Healthcare is changing quickly. We share observations, lessons, and ideas from the work we do and the problems we're trying to solve.",
    href: "/insights?topic=favdoctor",
  },

  research: {
    eyebrow: "FROM RESEARCH TO PRACTICE",
    title: "Evidence Matters When It Changes What Happens in the Real World.",
    description:
      "Explore perspectives on research, implementation, and the journey from evidence to meaningful health outcomes.",
    href: "/research",
  },

  newsletter: {
    eyebrow: "STAY CURIOUS",
    title: "Stay Curious About Healthcare.",
    description:
      "Get occasional insights from FavDoctor on healthcare systems, technology, research, and population health.",
    placeholder: "Your email address",
    buttonLabel: "Subscribe",
  },

  finalCta: {
    eyebrow: "START A CONVERSATION",
    title: "Have an Idea Worth Exploring?",
    description:
      "We're always interested in conversations about healthcare, technology, research, and systems that could make a difference.",
    cta: {
      label: "Talk to FavDoctor",
      href: "/contact",
    },
  },
} as const;