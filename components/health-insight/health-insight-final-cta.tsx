import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { healthInsight } from "@/data/health-insight";

export function HealthInsightFinalCta() {
  const { finalCta } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[32rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <Container className="relative py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-surface px-7 py-14 sm:px-10 lg:px-16 lg:py-20">
          {/* Decorative shapes */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full bg-primary/5 blur-3xl"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Icon */}
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-white">
              <HeartPulse className="size-7" />
            </div>

            {/* Eyebrow */}
            <p className="mt-7 text-sm font-semibold tracking-[0.16em] text-primary">
              {finalCta.eyebrow}
            </p>

            {/* Heading */}
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {finalCta.title}
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {finalCta.description}
            </p>

            <p className="mt-3 text-lg leading-8 text-muted-foreground">
              {finalCta.closing}
            </p>

            {/* CTA */}
            <div className="mt-9">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-full px-8 text-base"
              >
                <Link href={finalCta.cta.href}>
                  {finalCta.cta.label}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}