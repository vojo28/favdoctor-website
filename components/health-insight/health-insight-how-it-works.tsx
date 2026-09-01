import {
  ClipboardList,
  Users,
  HeartPulse,
  Link2,
  RefreshCw,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [
  ClipboardList,
  Users,
  HeartPulse,
  Link2,
  RefreshCw,
  BrainCircuit,
];

export function HealthInsightHowItWorks() {
  const { howItWorks } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {howItWorks.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {howItWorks.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground lg:text-xl">
            {howItWorks.description}
          </p>
        </div>

        {/* System flow */}
        <div className="relative mt-16 lg:mt-24">
          {/* Desktop connection line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-border lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {howItWorks.steps.map((step, index) => {
              const Icon = icons[index];

              return (
                <div key={step.title} className="relative">
                  {/* Arrow connector */}
                  {index < howItWorks.steps.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="absolute -right-4 top-10 z-20 hidden size-5 bg-brand-surface px-1 text-primary/40 lg:block"
                    />
                  )}

                  <div className="relative z-10">
                    {/* Step icon */}
                    <div className="flex size-24 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                      <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="size-6" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Step information */}
                    <div className="mt-7">
                      <p className="text-xs font-bold tracking-[0.2em] text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-3 text-xl font-semibold tracking-tight text-brand-heading">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* System intelligence panel */}
        <div className="mt-20 lg:mt-28">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-10 text-white lg:px-14 lg:py-14">
            {/* Background atmosphere */}
            <div
              aria-hidden
              className="absolute -right-32 -top-32 size-96 rounded-full bg-white/10 blur-3xl"
            />

            <div
              aria-hidden
              className="absolute -bottom-40 -left-20 size-80 rounded-full bg-white/5 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
              <div className="max-w-4xl">
                <p className="text-xs font-bold tracking-[0.2em] text-white/75">
                  ONE GATHERING BECOMES PART OF A BIGGER PICTURE
                </p>

                <p className="mt-5 text-balance text-2xl font-medium leading-relaxed text-white lg:text-4xl">
                  Health Insight does not simply collect information during a
                  gathering. It helps create a connected understanding of
                  people, health needs, and populations over time.
                </p>
              </div>

              {/* Intelligence visual */}
              <div className="hidden size-28 items-center justify-center rounded-full border border-white/20 bg-white/10 lg:flex">
                <BrainCircuit
                  className="size-12 text-white"
                  strokeWidth={1.25}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}