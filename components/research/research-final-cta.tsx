import Link from "next/link";
import { ArrowRight, Microscope } from "lucide-react";

import { Container } from "@/components/layout/container";
import { research } from "@/data/research";

export function ResearchFinalCta() {
  const { finalCta } = research;

  return (
    <section className="relative overflow-hidden bg-brand-heading">
      {/* Ambient background */}
      <div
        aria-hidden
        className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-primary/20 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute -bottom-48 left-1/4 size-[30rem] rounded-full bg-primary/10 blur-3xl"
      />

      <Container className="relative py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* Content */}
          <div className="max-w-4xl">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Microscope className="size-7" strokeWidth={1.6} />
            </div>

            <p className="mt-10 text-sm font-semibold tracking-[0.16em] text-white/60">
              {finalCta.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              {finalCta.title}
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
              {finalCta.description}
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
              {finalCta.closing}
            </p>
          </div>

          {/* CTA */}
          <div className="lg:pb-1">
            <Link
              href={finalCta.cta.href}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-heading transition-all duration-300 hover:gap-4 hover:bg-white/90 sm:w-auto"
            >
              {finalCta.cta.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 border-t border-white/10 pt-7 lg:mt-20">
          <p className="text-sm text-white/40">
            FavDoctor Research
          </p>
        </div>
      </Container>
    </section>
  );
}