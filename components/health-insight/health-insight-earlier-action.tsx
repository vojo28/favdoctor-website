import {
  Database,
  BrainCircuit,
  Radar,
  BellRing,
  Map,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [
  Database,
  BrainCircuit,
  Radar,
  BellRing,
  Map,
];

export function HealthInsightEarlierAction() {
  const { earlierAction } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {earlierAction.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
              {earlierAction.title}
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            {earlierAction.description}
          </p>
        </div>

        {/* Intelligence journey */}
        <div className="relative mt-16 lg:mt-24">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Main intelligence panel */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-white lg:p-10">
              {/* Background atmosphere */}
              <div
                aria-hidden
                className="absolute -right-32 -top-32 size-96 rounded-full bg-white/10 blur-3xl"
              />

              <div
                aria-hidden
                className="absolute -bottom-40 -left-20 size-80 rounded-full bg-white/5 blur-3xl"
              />

              <div className="relative flex min-h-[560px] flex-col">
                {/* Icon */}
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15">
                  <BrainCircuit className="size-7" strokeWidth={1.5} />
                </div>

                {/* Intelligence visual */}
                <div className="flex flex-1 items-center justify-center py-10">
                  <div className="relative flex size-48 items-center justify-center">
                    {/* Outer rings */}
                    <div className="absolute inset-0 rounded-full border border-white/15" />

                    <div className="absolute inset-7 rounded-full border border-white/20" />

                    <div className="absolute inset-14 rounded-full border border-white/20" />

                    {/* Pulse points */}
                    <div className="absolute left-1/2 top-0 size-4 -translate-x-1/2 rounded-full bg-white" />

                    <div className="absolute bottom-3 left-2 size-3 rounded-full bg-white/70" />

                    <div className="absolute bottom-8 right-0 size-3 rounded-full bg-white/70" />

                    <div className="absolute right-4 top-10 size-2.5 rounded-full bg-white/50" />

                    {/* Centre */}
                    <div className="relative flex size-24 items-center justify-center rounded-full bg-white text-primary shadow-xl">
                      <Radar className="size-11" strokeWidth={1.4} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-white/70">
                    LOOKING AHEAD
                  </p>

                  <h3 className="mt-4 max-w-md text-3xl font-semibold tracking-tight lg:text-4xl">
                    See more than what happened today.
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-white/70">
                    Over time, connected health information can help reveal
                    changing needs, emerging patterns, and opportunities for
                    earlier action.
                  </p>
                </div>
              </div>
            </div>

            {/* Intelligence capabilities */}
            <div className="grid gap-px overflow-hidden rounded-[2.5rem] border border-border bg-border sm:grid-cols-2">
              {earlierAction.capabilities.map((capability, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={capability.title}
                    className={`group relative bg-background p-7 lg:p-8 ${
                      index === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-6" strokeWidth={1.5} />
                      </div>

                      <span className="text-xs font-bold tracking-[0.2em] text-primary/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold tracking-tight text-brand-heading">
                        {capability.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>

                    <ArrowRight className="absolute bottom-7 right-7 size-5 text-primary/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* AI statement */}
        <div className="mt-16 lg:mt-20">
          <div className="grid gap-8 rounded-[2.5rem] border border-border bg-background p-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10 lg:p-10">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <BrainCircuit className="size-8" strokeWidth={1.4} />
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-primary">
                INTELLIGENCE WITH PURPOSE
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-heading lg:text-3xl">
                Technology should help people act earlier, not simply collect
                more information.
              </h3>

              <p className="mt-4 max-w-4xl leading-7 text-muted-foreground">
                Health Insight is being built with the potential to use
                technology and artificial intelligence to support pattern
                recognition, population understanding, prioritisation, and
                earlier health action — while keeping healthcare professionals
                and responsible decision-making at the centre.
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-16 max-w-5xl border-l-2 border-primary pl-6 lg:mt-20 lg:pl-8">
          <p className="text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
            {earlierAction.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}