import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { insights } from "@/data/insights";

export function InsightsFinalCta() {
  const { finalCta } = insights;

  return (
    <section className="bg-background">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="border-t border-border pt-16 sm:pt-20 lg:pt-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary">
                {finalCta.eyebrow}
              </p>

              <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
                {finalCta.title}
              </h2>
            </div>

            <div className="lg:pl-8">
              <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                {finalCta.description}
              </p>

              <Link
                href={finalCta.cta.href}
                className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-brand-heading"
              >
                {finalCta.cta.label}

                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}