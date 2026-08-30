import {
  Pill,
  Activity,
  TrendingUp,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { bpinsights } from "@/data/bpinsights";

const icons = [
  Pill,
  Activity,
  TrendingUp,
  ClipboardCheck,
  ArrowRight,
];

export function BPInsightsTreatment() {
  const { treatment } = bpinsights;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {treatment.eyebrow}
          </p>

          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {treatment.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {treatment.description}
          </p>
        </div>

        {/* Treatment response journey */}
        <div className="mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-background p-6 sm:p-8 lg:p-12">
            {/* Background accent */}
            <div
              aria-hidden
              className="absolute -right-32 -top-32 size-96 rounded-full bg-primary/[0.06] blur-3xl"
            />

            <div className="relative">
              {/* Desktop horizontal connector */}
              <div
                aria-hidden
                className="absolute left-[8%] right-[8%] top-9 hidden h-px bg-border lg:block"
              />

              <div className="grid gap-8 lg:grid-cols-5 lg:gap-6">
                {treatment.steps.map((step, index) => {
                  const Icon = icons[index];

                  return (
                    <div key={step} className="relative">
                      {/* Mobile connector */}
                      {index > 0 && (
                        <div
                          aria-hidden
                          className="absolute -top-8 left-6 h-8 w-px bg-border lg:hidden"
                        />
                      )}

                      {/* Marker */}
                      <div className="relative z-10 flex size-[4.5rem] items-center justify-center rounded-full border border-border bg-background shadow-sm">
                        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                      </div>

                      {/* Step */}
                      <div className="mt-6">
                        <p className="text-xs font-bold tracking-[0.2em] text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-brand-heading">
                          {step}
                        </h3>
                      </div>

                      {/* Flow arrow */}
                      {index < treatment.steps.length - 1 && (
                        <ArrowRight
                          aria-hidden
                          className="absolute -right-4 top-6 hidden size-5 text-primary/40 lg:block"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Response insight */}
              <div className="mt-12 border-t border-border pt-10 lg:mt-14 lg:pt-12">
                <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-8">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <TrendingUp className="size-7" />
                  </div>

                  <p className="max-w-4xl text-balance text-xl font-medium leading-relaxed text-brand-heading lg:text-3xl">
                    The value is not only knowing what changed. It is being
                    able to understand the response and use that information
                    to guide what happens next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Existing closing statement */}
        <div className="mt-12 max-w-4xl border-l-2 border-primary pl-6 lg:mt-16 lg:pl-8">
          <p className="text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
            {treatment.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}