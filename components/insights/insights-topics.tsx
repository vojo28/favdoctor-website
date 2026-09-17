import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { insights } from "@/data/insights";

export function InsightsTopics() {
  const { topics } = insights;

  return (
    <section className="bg-background">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Header */}
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-primary">
              {topics.eyebrow}
            </p>

            <h2 className="mt-5 max-w-xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {topics.title}
            </h2>
          </div>

          {/* Topics */}
          <div className="border-t border-border">
            {topics.topics.map((topic, index) => (
              <Link
                key={topic.slug}
                href={`/insights?topic=${topic.slug}`}
                className="group flex items-center justify-between gap-6 border-b border-border py-6 transition-colors duration-300 hover:bg-brand-surface sm:py-7"
              >
                <div className="flex items-start gap-5">
                  <span className="pt-1 text-xs font-bold tracking-[0.14em] text-primary/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-brand-heading sm:text-2xl">
                      {topic.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {topic.description}
                    </p>
                  </div>
                </div>

                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight className="size-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}