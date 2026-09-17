import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { careers } from "@/data/careers";

export function CareersOpportunities() {
  const { opportunities } = careers;

  return (
    <section
      id="opportunities"
      className="border-b border-border/60 bg-background"
    >
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20 lg:py-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {opportunities.eyebrow}
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {opportunities.title}
            </h2>

            <p className="mt-7 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {opportunities.description}
            </p>

            <div className="mt-10 border-t border-border/70 pt-8">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-heading sm:text-2xl">
                {opportunities.emptyState.title}
              </h3>

              <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                {opportunities.emptyState.description}
              </p>

              <Link
                href={opportunities.emptyState.cta.href}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-heading transition-colors hover:text-primary"
              >
                {opportunities.emptyState.cta.label}

                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}