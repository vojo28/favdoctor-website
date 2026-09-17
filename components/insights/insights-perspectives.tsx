import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { insights } from "@/data/insights";

export function InsightsPerspectives() {
  const { perspectives } = insights;

  return (
    <section className="bg-background">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Editorial statement */}
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-primary">
              {perspectives.eyebrow}
            </p>

            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {perspectives.title}
            </h2>
          </div>

          {/* Description + CTA */}
          <div className="lg:pl-10">
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {perspectives.description}
            </p>

            <Link
              href={perspectives.href}
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-brand-heading"
            >
              Explore FavDoctor perspectives

              <span className="flex size-10 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}