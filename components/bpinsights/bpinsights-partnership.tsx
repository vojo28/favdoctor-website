import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { bpinsights } from "@/data/bpinsights";

export function BPInsightsPartnership() {
  const { partnership, finalCta } = bpinsights;

  return (
    <>
      {/* Partnership */}
      <section className="relative overflow-hidden bg-background">
        <Container className="relative py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold tracking-wider text-primary">
                {partnership.eyebrow}
              </p>

              <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
                {partnership.title}
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                {partnership.description}
              </p>
            </div>

            {/* Directional visual */}
            <div className="hidden size-24 items-center justify-center rounded-full border border-primary/10 bg-primary/5 text-primary lg:flex">
              <ArrowUpRight
                className="size-10"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href={partnership.primaryCta.href}>
                {partnership.primaryCta.label}
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-border bg-transparent"
            >
              <Link
                href={partnership.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {partnership.secondaryCta.label}

                <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-primary text-white">
        {/* Background atmosphere */}
        <div
          aria-hidden
          className="absolute -left-40 -top-40 size-[32rem] rounded-full bg-white/10 blur-[120px]"
        />

        <div
          aria-hidden
          className="absolute -bottom-48 right-0 size-[32rem] rounded-full bg-white/10 blur-[140px]"
        />

        <Container className="relative py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold tracking-wider text-white/70">
                BP INSIGHTS
              </p>

              <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white lg:text-6xl">
                {finalCta.title}
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                {finalCta.description}
              </p>
            </div>

            {/* CTA */}
            <div className="lg:pb-1">
              <Button
                asChild
                size="lg"
                className="group bg-white text-primary shadow-lg shadow-black/10 hover:bg-white/90"
              >
                <Link
                  href={finalCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {finalCta.label}

                  <ArrowUpRight className="ml-2 size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-20 border-t border-white/15 pt-6">
            <p className="text-sm font-medium tracking-wide text-white/60">
              BP Insights — Cardiovascular Health Intelligence
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}