import {
  Activity,
  CalendarDays,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { bpinsights } from "@/data/bpinsights";

export function BPInsightsLongitudinal() {
  const { longitudinal } = bpinsights;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {longitudinal.eyebrow}
          </p>

          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {longitudinal.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {longitudinal.description}
          </p>
        </div>

        {/* Time progression */}
        <div className="mt-16 lg:mt-24">
          <div className="relative">
            {/* Main timeline */}
            <div
              aria-hidden
              className="absolute left-6 right-6 top-7 hidden h-px bg-border lg:block"
            />

            <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
              {/* Moment */}
              <div className="relative">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full border-4 border-brand-surface bg-primary text-primary-foreground">
                  <Activity className="size-6" />
                </div>

                <div className="mt-7">
                  <p className="text-xs font-bold tracking-[0.2em] text-primary">
                    MOMENT
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-heading">
                    One reading
                  </h3>

                  <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
                    A single measurement provides a snapshot of what is
                    happening at that moment.
                  </p>
                </div>
              </div>

              {/* History */}
              <div className="relative">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full border-4 border-brand-surface bg-primary text-primary-foreground">
                  <CalendarDays className="size-6" />
                </div>

                <div className="mt-7">
                  <p className="text-xs font-bold tracking-[0.2em] text-primary">
                    HISTORY
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-heading">
                    Repeated readings
                  </h3>

                  <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
                    Measurements collected over time begin to build a more
                    meaningful health history.
                  </p>
                </div>
              </div>

              {/* Pattern */}
              <div className="relative">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full border-4 border-brand-surface bg-primary text-primary-foreground">
                  <TrendingUp className="size-6" />
                </div>

                <div className="mt-7">
                  <p className="text-xs font-bold tracking-[0.2em] text-primary">
                    PATTERN
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-heading">
                    Emerging trends
                  </h3>

                  <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
                    A growing history can make changes, direction, and
                    patterns easier to recognize.
                  </p>
                </div>
              </div>

              {/* Insight */}
              <div className="relative">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-brand-surface">
                  <ArrowRight className="size-6" />
                </div>

                <div className="mt-7">
                  <p className="text-xs font-bold tracking-[0.2em] text-primary">
                    INSIGHT
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-heading">
                    A clearer picture
                  </h3>

                  <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
                    Connected information creates greater context for
                    understanding cardiovascular health and deciding what to
                    do next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual data progression */}
        <div className="mt-16 lg:mt-24">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-background p-7 sm:p-8 lg:p-12">
            <div
              aria-hidden
              className="absolute -right-32 -top-32 size-96 rounded-full bg-primary/[0.06] blur-3xl"
            />

            <div className="relative">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-primary">
                    THE VALUE OF LONGITUDINAL DATA
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-heading lg:text-3xl">
                    A single point becomes a trajectory.
                  </h3>
                </div>

                <Activity className="hidden size-7 text-primary sm:block" />
              </div>

              {/* Abstract data visualization */}
              <div className="relative mt-10 h-48 overflow-hidden rounded-[1.75rem] border border-border bg-brand-surface">
                {/* Grid */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:40px_40px]"
                />

                {/* Rising trajectory */}
                <svg
                  viewBox="0 0 1000 220"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <path
                    d="M0 165 C80 145 100 175 180 150 S300 135 370 145 S470 95 550 115 S650 130 720 95 S820 70 900 82 S960 50 1000 58"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-primary"
                  />
                </svg>

                {/* Data points */}
                <div className="absolute left-[18%] top-[63%] size-3 rounded-full bg-primary ring-4 ring-primary/10" />
                <div className="absolute left-[36%] top-[58%] size-3 rounded-full bg-primary ring-4 ring-primary/10" />
                <div className="absolute left-[55%] top-[43%] size-3 rounded-full bg-primary ring-4 ring-primary/10" />
                <div className="absolute left-[73%] top-[38%] size-3 rounded-full bg-primary ring-4 ring-primary/10" />
                <div className="absolute left-[90%] top-[25%] size-3 rounded-full bg-primary ring-4 ring-primary/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 max-w-4xl border-l-2 border-primary pl-6 lg:mt-16 lg:pl-8">
          <p className="text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
            {longitudinal.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}