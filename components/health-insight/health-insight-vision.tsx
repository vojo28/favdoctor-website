import { ArrowRight, HeartPulse } from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

export function HealthInsightVision() {
  const { vision } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-heading text-white">
      {/* Ambient light */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-48 size-[38rem] rounded-full bg-primary/20 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-48 size-[32rem] rounded-full bg-primary/10 blur-3xl"
      />

      <Container className="relative py-24 lg:py-36">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <HeartPulse className="size-5 text-white/80" />
          </div>

          <p className="text-sm font-semibold tracking-[0.16em] text-white/50">
            {vision.eyebrow}
          </p>
        </div>

        {/* Main vision */}
        <div className="mt-10 max-w-6xl">
          <h2 className="text-balance text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl lg:leading-[1.05]">
            {vision.title}
          </h2>
        </div>

        {/* Supporting copy */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <p className="text-2xl font-medium leading-relaxed text-white/80 sm:text-3xl">
            {vision.description}
          </p>

          <div className="max-w-3xl space-y-5 text-lg leading-8 text-white/55">
            {vision.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Environments */}
        <div className="mt-20 border-y border-white/10 py-10 lg:mt-28 lg:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {vision.environments.map((environment, index) => (
              <div
                key={environment}
                className="relative flex items-center justify-center py-5 lg:py-0"
              >
                {index > 0 && (
                  <ArrowRight
                    aria-hidden
                    className="absolute -left-3 hidden size-5 text-white/20 lg:block"
                  />
                )}

                <span className="text-2xl font-bold tracking-[0.12em] text-white/80 sm:text-3xl lg:text-4xl">
                  {environment}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {vision.outcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-5 size-2 rounded-full bg-primary" />

              <p className="text-lg font-semibold text-white">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}