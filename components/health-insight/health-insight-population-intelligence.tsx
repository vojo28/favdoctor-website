import {
  Building2,
  Church,
  Users,
  MapPinned,
  BrainCircuit,
  ShieldCheck,
  TrendingUp,
  Activity,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const audiences = [
  Building2,
  Church,
  Users,
  MapPinned,
];

export function HealthInsightPopulationIntelligence() {
  const { populationIntelligence } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-heading text-white">
      {/* Ambient background */}
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
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {populationIntelligence.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight lg:text-6xl">
              {populationIntelligence.title}
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-white/65 lg:justify-self-end">
            {populationIntelligence.description}
          </p>
        </div>

        {/* Main intelligence visual */}
        <div className="mt-16 lg:mt-20">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Intelligence panel */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-white lg:p-10">
              <div
                aria-hidden
                className="absolute -right-28 -top-28 size-80 rounded-full bg-white/10 blur-3xl"
              />

              <div
                aria-hidden
                className="absolute -bottom-40 -left-24 size-80 rounded-full bg-white/5 blur-3xl"
              />

              <div className="relative flex min-h-[560px] flex-col">
                {/* Top icon */}
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15">
                  <BrainCircuit className="size-7" strokeWidth={1.5} />
                </div>

                {/* Intelligence visual */}
                <div className="flex flex-1 items-center justify-center py-10">
                  <div className="relative flex size-48 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <div className="absolute inset-6 rounded-full border border-white/15" />

                    <div className="absolute inset-12 rounded-full border border-white/15" />

                    <BrainCircuit
                      className="relative z-10 size-20 text-white"
                      strokeWidth={1.1}
                    />

                    {/* Data points */}
                    <div className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 rounded-full bg-white" />

                    <div className="absolute bottom-8 -left-2 size-4 rounded-full bg-white/80" />

                    <div className="absolute bottom-8 -right-2 size-4 rounded-full bg-white/80" />

                    <div className="absolute right-3 top-12 size-3 rounded-full bg-white/60" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-white/70">
                    SEE THE BIGGER PICTURE
                  </p>

                  <h3 className="mt-4 max-w-md text-3xl font-semibold tracking-tight lg:text-4xl">
                    Individual health information can reveal population needs.
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-white/70">
                    When health information is responsibly understood at a
                    population level, organisations can see patterns that may
                    otherwise remain invisible.
                  </p>
                </div>
              </div>
            </div>

            {/* Insights */}
            <div className="grid gap-px overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 sm:grid-cols-2">
              {populationIntelligence.insights.map((insight, index) => {
                const InsightIcons = [
                  TrendingUp,
                  Activity,
                  Users,
                  MapPinned,
                ];

                const Icon = InsightIcons[index];

                return (
                  <div
                    key={insight.title}
                    className="relative min-h-[280px] bg-brand-heading p-7 lg:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-primary">
                        <Icon className="size-6" strokeWidth={1.5} />
                      </div>

                      <span className="text-xs font-bold tracking-[0.2em] text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {insight.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/55">
                        {insight.description}
                      </p>
                    </div>

                    <ArrowUpRight className="absolute bottom-7 right-7 size-5 text-white/20" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Who can understand their population */}
        <div className="mt-16 border-t border-white/10 pt-10 lg:mt-24 lg:pt-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              FOR ORGANISATIONS THAT SERVE PEOPLE
            </p>

            <h3 className="mt-4 text-balance text-3xl font-semibold tracking-tight lg:text-5xl">
              Understand the health of the people you bring together.
            </h3>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {populationIntelligence.audiences.map((audience, index) => {
              const Icon = audiences[index];

              return (
                <div
                  key={audience.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:bg-white/[0.08]"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-primary">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </div>

                  <h4 className="mt-7 text-xl font-semibold tracking-tight">
                    {audience.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {audience.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Privacy / responsible intelligence */}
        <div className="mt-16 lg:mt-20">
          <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="flex max-w-3xl gap-5">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <ShieldCheck className="size-7" strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-primary">
                  RESPONSIBLE BY DESIGN
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight lg:text-3xl">
                  Population understanding should respect individual privacy.
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  Health Insight is designed around the principle that
                  organisations can understand broader population health needs
                  without unnecessarily exposing an individual's private health
                  information.
                </p>
              </div>
            </div>

            <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-primary">
              <ShieldCheck className="size-6" />
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-16 border-t border-white/10 pt-10 lg:mt-20 lg:pt-14">
          <p className="max-w-5xl text-balance text-3xl font-medium leading-tight lg:text-5xl">
            {populationIntelligence.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}