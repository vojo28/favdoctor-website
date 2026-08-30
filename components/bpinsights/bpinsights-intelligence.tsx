import {
  Activity,
  Link2,
  LineChart,
  BrainCircuit,
  Zap,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { bpinsights } from "@/data/bpinsights";

const icons = [
  Activity,
  Link2,
  LineChart,
  BrainCircuit,
  Zap,
  RefreshCw,
];

export function BPInsightsIntelligence() {
  const { intelligence } = bpinsights;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {intelligence.eyebrow}
          </p>

          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {intelligence.title}
          </h2>
        </div>

        {/* Intelligence flow */}
        <div className="relative mt-16 lg:mt-24">
          {/* Desktop flow line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-border lg:block"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {intelligence.steps.map((step, index) => {
              const Icon = icons[index];

              return (
                <div key={step.title} className="relative">
                  {/* Connector */}
                  {index < intelligence.steps.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="absolute -right-3 top-10 z-20 hidden size-5 bg-brand-surface text-primary/40 lg:block"
                    />
                  )}

                  <div className="relative z-10">
                    {/* Step marker */}
                    <div className="flex size-24 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                      <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </div>
                    </div>

                    {/* Step information */}
                    <div className="mt-7">
                      <p className="text-xs font-bold tracking-[0.2em] text-primary">
                        0{index + 1}
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

        {/* Intelligence transformation */}
        <div className="mt-16 lg:mt-24">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-10 text-primary-foreground lg:px-14 lg:py-14">
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
                <p className="text-xs font-bold tracking-[0.2em] text-primary-foreground/70">
                  THE TRANSFORMATION
                </p>

                <p className="mt-5 text-balance text-2xl font-medium leading-relaxed lg:text-4xl">
                  {intelligence.closing}
                </p>
              </div>

              {/* Visual */}
              <div className="hidden size-28 items-center justify-center rounded-full border border-white/20 bg-white/10 lg:flex">
                <BrainCircuit className="size-12" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}