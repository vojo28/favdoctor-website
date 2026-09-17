import Link from "next/link";
import { ArrowUpRight, FlaskConical } from "lucide-react";

import { Container } from "@/components/layout/container";
import { insights } from "@/data/insights";

export function InsightsResearch() {
  const { research } = insights;

  return (
    <section className="bg-brand-surface">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-heading px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          {/* Ambient detail */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10">
                  <FlaskConical className="size-6 text-white" />
                </div>

                <p className="text-sm font-semibold tracking-[0.18em] text-white/70">
                  {research.eyebrow}
                </p>
              </div>

              <h2 className="mt-7 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {research.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                {research.description}
              </p>
            </div>

            <Link
              href={research.href}
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-white"
            >
              Explore FavDoctor Research

              <span className="flex size-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-brand-heading">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}