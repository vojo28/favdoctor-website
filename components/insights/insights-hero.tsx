import { ArrowDown } from "lucide-react";

import { Container } from "@/components/layout/container";
import { insights } from "@/data/insights";

export function InsightsHero() {
  const { hero } = insights;

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-primary/8 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-40 size-[30rem] rounded-full bg-primary/5 blur-3xl"
      />

      <Container className="relative">
        <div className="flex min-h-[62vh] items-center py-24 sm:py-28 lg:min-h-[68vh] lg:py-32">
          <div className="w-full">
            <div className="max-w-6xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary">
                {hero.eyebrow}
              </p>

              <h1 className="mt-6 max-w-5xl text-balance text-5xl font-bold tracking-[-0.045em] text-brand-heading sm:text-6xl lg:text-8xl lg:leading-[0.98]">
                {hero.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {hero.description}
              </p>
            </div>

            <div className="mt-16 flex items-center gap-4 sm:mt-20">
              <div className="flex size-11 items-center justify-center rounded-full border border-border bg-background">
                <ArrowDown className="size-4 text-primary" />
              </div>

              <span className="text-sm font-medium text-muted-foreground">
                Explore our insights
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}