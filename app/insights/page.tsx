import type { Metadata } from "next";

import { InsightsHero } from "@/components/insights/insights-hero";
import { InsightsFeatured } from "@/components/insights/insights-featured";
import { InsightsTopics } from "@/components/insights/insights-topics";
import { InsightsLatest } from "@/components/insights/insights-latest";
import { InsightsPerspectives } from "@/components/insights/insights-perspectives";
import { InsightsResearch } from "@/components/insights/insights-research";
import { InsightsFinalCta } from "@/components/insights/insights-final-cta";

import {
  insightArticles,
  insightTopics,
} from "@/data/insight-articles";

export const metadata: Metadata = {
  title: "Insights | FavDoctor",
  description:
    "Ideas, evidence, and perspectives on healthcare systems, research, implementation, prevention, technology, and population health from FavDoctor.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights | FavDoctor",
    description:
      "Ideas, evidence, and perspectives on better healthcare from FavDoctor.",
    url: "/insights",
    siteName: "FavDoctor",
    type: "website",
  },
};

type InsightsPageProps = {
  searchParams: Promise<{
    topic?: string;
  }>;
};

export default async function InsightsPage({
  searchParams,
}: InsightsPageProps) {
  const { topic } = await searchParams;

  const selectedTopic = insightTopics.find(
    (item) => item.slug === topic,
  );

  const filteredArticles = selectedTopic
    ? insightArticles.filter(
        (article) => article.topic === selectedTopic.slug,
      )
    : insightArticles;

  return (
    <>
      <InsightsHero />

      <InsightsFeatured />

      <InsightsTopics />

      <InsightsLatest
        articles={filteredArticles}
        selectedTopic={selectedTopic?.title}
      />

      <InsightsPerspectives />

      <InsightsResearch />

      <InsightsFinalCta />
    </>
  );
}