import {
  Database,
  BrainCircuit,
  Map,
  Users,
  HeartPulse,
  LineChart,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [
  Database,
  BrainCircuit,
  Map,
  Users,
  HeartPulse,
  LineChart,
];

export function HealthInsightIntelligence() {
  const { intelligence } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-heading text-white">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute -left-40 top-0 size-[34rem] rounded-full bg-primary/20 blur-[140px]"
      />

      <div
        aria-hidden
        className="absolute -bottom-48 right-0 size-[34rem] rounded-full bg-primary/10 blur-[140px]"
      />

      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {intelligence.eyebrow}
            </p>

            <h2 className="mt-6 text-balance text-5xl font-bold leading-[0.98] tracking-tight lg:text-7xl">
              {intelligence.title}
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-white/65 lg:justify-self-end">
            {intelligence.description}
          </p>
        </div>

        {/* Intelligence system */}
        <div className="relative mt-16 lg:mt-24">
          {/* Desktop flow line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-white/10 lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {intelligence.items.map((item, index) => {
              const Icon = icons[index];

              return (
                <div key={item.title} className="relative">
                  {/* Connector */}
                  {index < intelligence.items.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="absolute -right-4 top-10 z-20 hidden size-6 bg-brand-heading px-0.5 text-primary/60 lg:block"
                    />
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex size-24 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <div className="flex size-14 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Icon className="size-6" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-7">
                      <p className="text-xs font-bold tracking-[0.2em] text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-7 text-white/55">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* What this makes possible */}
        <div className="mt-20 border-t border-white/10 pt-10 lg:mt-28 lg:pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-primary">
                WHAT THIS MAKES POSSIBLE
              </p>

              <h3 className="mt-5 text-balance text-3xl font-semibold tracking-tight lg:text-5xl">
                See the health of a population beyond a single day.
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {intelligence.outcomes.map((outcome, index) => (
                <div
                  key={outcome}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-8 text-lg font-medium leading-7 text-white/75">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI statement */}
        <div className="mt-10 lg:mt-14">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] px-8 py-10 lg:px-14 lg:py-14">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 size-80 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
              <div className="max-w-4xl">
                <p className="text-xs font-bold tracking-[0.2em] text-primary">
                  HUMAN HEALTH. INTELLIGENT SUPPORT.
                </p>

                <p className="mt-5 text-balance text-2xl font-medium leading-relaxed text-white lg:text-4xl">
                  Health Insight is designed to combine structured health
                  information, technology, and intelligent systems to help
                  organisations understand needs earlier and make better
                  population health decisions.
                </p>

                <p className="mt-6 max-w-3xl leading-7 text-white/55">
                  Technology can help identify patterns, organise information,
                  support follow-up, and reveal opportunities for action while
                  healthcare decisions remain grounded in appropriate human and
                  professional oversight.
                </p>
              </div>

              <div className="hidden size-28 items-center justify-center rounded-full border border-white/10 bg-primary/10 text-primary lg:flex">
                <BrainCircuit className="size-12" strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}