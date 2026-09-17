export function formatInsightDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export const insightTopics = [
  {
    slug: "healthcare-systems",
    title: "Healthcare Systems",
    description:
      "Perspectives on how healthcare systems can become more accessible, connected, preventive, and effective.",
  },
  {
    slug: "research-implementation",
    title: "Research & Implementation",
    description:
      "Lessons from research, implementation science, field work, and translating evidence into practice.",
  },
  {
    slug: "health-prevention",
    title: "Health & Prevention",
    description:
      "Ideas around prevention, population health, and helping people act earlier.",
  },
  {
    slug: "healthcare-technology",
    title: "Healthcare Technology",
    description:
      "Perspectives on technology, AI, digital health, and the systems being built to improve healthcare.",
  },
  {
    slug: "favdoctor",
    title: "FavDoctor",
    description:
      "What we're building, what we're learning, and the ideas shaping FavDoctor.",
  },
] as const;

export type InsightTopicSlug = (typeof insightTopics)[number]["slug"];

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  topic: InsightTopicSlug;
  date: string;
  readTime: string;
  author: string;
  image?: {
    src: string;
    alt: string;
  };
  content: {
    type: "paragraph" | "heading" | "quote";
    text: string;
  }[];
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "passenger-communication-aviation-safety-nigeria",
    title:
      "What the U.S. Learned From 9/11 About Passenger Communication — and What Nigeria's Aviation System Can Learn",
    description:
      "A look at how communication became part of aviation safety after 9/11, and what that experience can teach us about keeping passengers informed during emergencies.",
    topic: "healthcare-systems",
    date: "2026-09-17",
    readTime: "8 min read",
    author: "FavDoctor",
    image: {
      src: "/images/insights/featured.webp",
      alt: "Passengers and communication systems in an aviation environment",
    },
    content: [
      {
        type: "paragraph",
        text: "Content coming soon.",
      },
    ],
  },
];

export function getInsightArticle(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}