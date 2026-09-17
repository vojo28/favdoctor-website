import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import {
  formatInsightDate,
  type InsightArticle,
} from "@/data/insight-articles";import { insights } from "@/data/insights";

type InsightsLatestProps = {
  articles: readonly InsightArticle[];
  selectedTopic?: string;
};

export function InsightsLatest({
  articles,
  selectedTopic,
}: InsightsLatestProps) {
  const { latest } = insights;

  return (
    <section className="bg-brand-surface">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            {latest.eyebrow}
          </p>

          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {selectedTopic ? selectedTopic : latest.title}
            </h2>

            {selectedTopic && (
              <Link
                href="/insights"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-heading"
              >
                <X className="size-4" />
                Clear filter
              </Link>
            )}
          </div>
        </div>

        {articles.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group flex h-full flex-col border-t border-border pt-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.14em] text-primary">
                    {insightTopicLabel(article.topic)}
                  </span>

                  <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>

                <h3 className="mt-7 text-xl font-semibold leading-snug tracking-tight text-brand-heading sm:text-2xl">
                  {article.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {article.description}
                </p>

                <div className="mt-auto flex items-center gap-3 pt-8 text-xs font-medium text-muted-foreground">
                <span>{formatInsightDate(article.date)}</span>
                  <span
                    aria-hidden
                    className="size-1 rounded-full bg-border"
                  />

                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-14 border-y border-border py-14">
            <p className="text-2xl font-semibold tracking-tight text-brand-heading sm:text-3xl">
              {selectedTopic
                ? `No insights in ${selectedTopic} yet.`
                : "New perspectives are coming."}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              We're documenting what we're learning from healthcare research,
              implementation, technology, and the systems we're building.
            </p>

            {selectedTopic && (
              <Link
                href="/insights"
                className="mt-7 inline-flex text-sm font-semibold text-brand-heading underline decoration-border underline-offset-4 transition-colors hover:text-primary"
              >
                Explore all insights
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

function insightTopicLabel(topic: InsightArticle["topic"]) {
  const labels: Record<InsightArticle["topic"], string> = {
    "healthcare-systems": "Healthcare Systems",
    "research-implementation": "Research & Implementation",
    "health-prevention": "Health & Prevention",
    "healthcare-technology": "Healthcare Technology",
    favdoctor: "FavDoctor",
  };

  return labels[topic];
}