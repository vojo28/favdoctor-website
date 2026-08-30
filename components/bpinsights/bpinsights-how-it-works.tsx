import {
  Database,
  Layers3,
  Link2,
  ScanSearch,
  Zap,
  RefreshCw,
  ArrowDown,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { bpinsights } from "@/data/bpinsights";

const icons = [
  Database,
  Layers3,
  Link2,
  ScanSearch,
  Zap,
  RefreshCw,
];

export function BPInsightsHowItWorks() {
  const { howItWorks } = bpinsights;

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-brand-surface"
    >
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {howItWorks.eyebrow}
          </p>

          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {howItWorks.title}
          </h2>
        </div>

        {/* Journey */}
        <div className="relative mt-16 lg:mt-24">
          {/* Central desktop line */}
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-border lg:block"
          />

          <div className="space-y-8 lg:space-y-0">
            {howItWorks.steps.map((step, index) => {
              const Icon = icons[index];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="relative lg:grid lg:min-h-[260px] lg:grid-cols-2"
                >
                  {/* Step content */}
                  <div
                    className={`flex ${
                      isEven
                        ? "lg:justify-end lg:pr-20"
                        : "lg:col-start-2 lg:pl-20"
                    }`}
                  >
                    <div className="w-full max-w-xl rounded-[2rem] border border-border bg-background p-7 lg:p-8">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="size-7" />
                        </div>

                        <span className="text-xs font-bold tracking-[0.2em] text-primary">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-brand-heading">
                        {step.title}
                      </h3>

                      <p className="mt-3 leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Central marker */}
                  <div className="absolute left-1/2 top-8 hidden size-5 -translate-x-1/2 rounded-full border-4 border-brand-surface bg-primary lg:block" />

                  {/* Mobile arrow */}
                  {index < howItWorks.steps.length - 1 && (
                    <div className="flex justify-center py-3 lg:hidden">
                      <ArrowDown className="size-5 text-primary/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}