import { HeartPulse, ArrowDownRight, Activity } from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

export function HealthInsightBiggerPicture() {
  const { biggerPicture } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-heading text-white">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute -left-40 top-0 size-[34rem] rounded-full bg-primary/20 blur-[140px]"
      />

      <div
        aria-hidden
        className="absolute -bottom-40 -right-32 size-[30rem] rounded-full bg-primary/10 blur-[140px]"
      />

      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {biggerPicture.eyebrow}
          </p>

          <h2 className="mt-6 text-balance text-5xl font-bold leading-[0.98] tracking-tight lg:text-7xl">
            {biggerPicture.title}
          </h2>
        </div>

        {/* Main content */}
        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
          {/* Narrative */}
          <div className="max-w-2xl">
            <p className="text-xl leading-9 text-white/70 lg:text-2xl">
              {biggerPicture.description}
            </p>

            <div className="mt-12 border-l-2 border-primary pl-6 lg:mt-16 lg:pl-8">
              <p className="text-balance text-2xl font-medium leading-relaxed text-white lg:text-4xl">
                {biggerPicture.closing}
              </p>
            </div>
          </div>

          {/* Visual concept */}
          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Prevention */}
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                  <HeartPulse className="size-7" strokeWidth={1.5} />
                </div>

                <p className="mt-10 text-xs font-bold tracking-[0.2em] text-white/40">
                  EARLIER
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Reach
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Create more opportunities to reach people before health
                  concerns become more serious.
                </p>
              </div>

              {/* Awareness */}
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur sm:translate-y-10">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Activity className="size-7" strokeWidth={1.5} />
                </div>

                <p className="mt-10 text-xs font-bold tracking-[0.2em] text-white/40">
                  BETTER
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Understand
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Build a clearer understanding of health needs across
                  populations.
                </p>
              </div>
            </div>

            {/* Direction */}
            <div className="mt-14 flex items-center gap-5 border-t border-white/10 pt-8">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <ArrowDownRight className="size-5" />
              </div>

              <p className="text-sm leading-6 text-white/60">
                Earlier reach and better understanding can create more
                opportunities for meaningful health action.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-white/10 pt-8 lg:mt-28">
          <div className="flex items-center gap-4">
            <div className="flex size-10 items-center justify-center rounded-full border border-white/10">
              <span className="size-2 rounded-full bg-primary" />
            </div>

            <p className="text-sm font-medium text-white/50">
              Prevention · Early awareness · Connected care · Population health
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}