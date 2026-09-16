import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CircleCheck,
  HeartPulse,
  Lightbulb,
  Search,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const stepIcons = [
  UsersRound,
  Search,
  HeartPulse,
  ArrowRight,
  BrainCircuit,
  Lightbulb,
];

export function HealthInsightHowItWorks() {
  const { howItWorks } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-heading text-white">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-0 size-[36rem] rounded-full bg-primary/20 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 bottom-0 size-[30rem] rounded-full bg-primary/10 blur-3xl"
      />

      <Container className="relative py-20 lg:py-28">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-primary-foreground/70">
            {howItWorks.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {howItWorks.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            {howItWorks.description}
          </p>
        </div>

        {/* Journey */}
        <div className="relative mt-16 lg:mt-20">
          {/* Desktop connecting line */}
          <div
            aria-hidden
            className="absolute left-[8.33%] right-[8.33%] top-8 hidden h-px bg-white/15 lg:block"
          />

          <div className="grid gap-10 lg:grid-cols-6 lg:gap-5">
            {howItWorks.steps.map((step, index) => {
              const Icon = stepIcons[index];
              const isLast = index === howItWorks.steps.length - 1;

              return (
                <div key={step.title} className="relative">
                  {/* Mobile connector */}
                  {!isLast && (
                    <div
                      aria-hidden
                      className="absolute left-6 top-14 h-[calc(100%+2.5rem)] w-px bg-white/10 lg:hidden"
                    />
                  )}

                  <div className="relative flex gap-5 lg:block">
                    {/* Step marker */}
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-sm lg:size-16 lg:rounded-[1.25rem]">
                      <Icon className="size-5 lg:size-6" />
                    </div>

                    <div className="pt-1 lg:pt-7">
                      <div className="text-xs font-bold tracking-[0.18em] text-white/35">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-[180px] text-sm leading-6 text-white/55">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* System transformation */}
        <div className="mt-20 border-t border-white/10 pt-12 lg:mt-24 lg:pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Sparkles className="size-5 text-primary-foreground/70" />

                <p className="text-xs font-bold tracking-[0.18em] text-white/45">
                  THE SYSTEM
                </p>
              </div>

              <p className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                One programme can become a continuous source of health
                understanding.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <CircleCheck className="size-5 text-primary-foreground/70" />

                <p className="mt-5 font-semibold text-white">
                  Individual
                </p>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Understand individual health needs and opportunities for
                  action.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <UsersRound className="size-5 text-primary-foreground/70" />

                <p className="mt-5 font-semibold text-white">
                  Population
                </p>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Understand broader patterns and health needs across the
                  population.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <Lightbulb className="size-5 text-primary-foreground/70" />

                <p className="mt-5 font-semibold text-white">
                  Improvement
                </p>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Use insight to strengthen future health programmes and
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom progression */}
        <div className="mt-14 flex justify-center lg:mt-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-white/35">
              FROM ONE INTERACTION
            </p>

            <ArrowDown className="size-5 text-white/30" />

            <p className="text-lg font-medium text-white/75">
              To better population health decisions over time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}