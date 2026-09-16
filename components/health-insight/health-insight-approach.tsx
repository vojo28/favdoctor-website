import {
  MapPin,
  BrainCircuit,
  Network,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [
  MapPin,
  BrainCircuit,
  Network,
  RefreshCw,
];

export function HealthInsightApproach() {
  const { approach } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {approach.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {approach.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {approach.description}
          </p>
        </div>

        {/* Approach flow */}
        <div className="relative mt-16 lg:mt-24">
          {/* Desktop connecting line */}
          <div
            aria-hidden
            className="absolute left-[8%] right-[8%] top-14 hidden h-px bg-border lg:block"
          />

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.steps.map((step, index) => {
              const Icon = icons[index];

              return (
                <div key={step.title} className="relative">
                  {/* Desktop arrow */}
                  {index < approach.steps.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="absolute -right-4 top-11 z-20 hidden size-6 bg-brand-surface px-1 text-primary lg:block"
                    />
                  )}

                  <div className="relative">
                    {/* Number and icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex size-28 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                        <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon
                            className="size-8"
                            strokeWidth={1.4}
                          />
                        </div>
                      </div>

                      <span className="text-xs font-bold tracking-[0.2em] text-primary/40 lg:hidden">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      <p className="hidden text-xs font-bold tracking-[0.2em] text-primary lg:block">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-heading">
                        {step.title}
                      </h3>

                      <p className="mt-4 max-w-xs leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transformation statement */}
        <div className="mt-16 lg:mt-24">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-10 text-white lg:px-14 lg:py-14">
            {/* Background */}
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
                  THE HEALTH INSIGHT APPROACH
                </p>

                <p className="mt-5 text-balance text-2xl font-medium leading-relaxed text-white lg:text-4xl">
                  {approach.closing}
                </p>
              </div>

              {/* Visual */}
              <div className="hidden size-28 items-center justify-center rounded-full border border-white/20 bg-white/10 lg:flex">
                <RefreshCw
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