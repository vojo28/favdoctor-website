import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Handshake } from "lucide-react";

import { Container } from "@/components/layout/container";
import { awards } from "@/data/awards";

export function AwardsFinalCta() {
  const { finalCta } = awards;

  return (
    <section className="border-t border-white/10 bg-brand-navy">
      <Container>
        <div className="py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            {/* Intro */}
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.16em] text-brand-blue">
                {finalCta.eyebrow}
              </p>

              <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                {finalCta.title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
                {finalCta.description}
              </p>
            </div>

            {/* Opportunities */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href="/partnership"
                className="group flex items-center justify-between rounded-2xl border border-brand-blue/20 bg-brand-surface-alt p-5 transition-all duration-300 hover:bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-navy/10">
                    <Handshake
                      className="size-5 text-brand-heading"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-brand-heading">
                      Partner With FavDoctor
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Build solutions together.
                    </p>
                  </div>
                </div>

                <ArrowRight
                  className="size-4 text-brand-heading transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/careers"
                className="group flex items-center justify-between rounded-2xl border border-brand-blue/20 bg-brand-surface-alt p-5 transition-all duration-300 hover:bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-navy/10">
                    <BriefcaseBusiness
                      className="size-5 text-brand-heading"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-brand-heading">
                      Explore Careers
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Help build what matters.
                    </p>
                  </div>
                </div>

                <ArrowRight
                  className="size-4 text-brand-heading transition-transform duration-300 group-hover:translate-x-1"
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