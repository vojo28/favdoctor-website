import {
  ShieldCheck,
  Link2,
  BrainCircuit,
  ArrowRight,
  Check,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [ShieldCheck, Link2, BrainCircuit];

export function HealthInsightMoreThanOutreach() {
  const { moreThanOutreach } = healthInsight;

  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {moreThanOutreach.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {moreThanOutreach.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {moreThanOutreach.description}
          </p>
        </div>

        {/* Main system visual */}
        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — System transformation */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-heading p-8 text-white lg:p-10">
            {/* Atmosphere */}
            <div
              aria-hidden
              className="absolute -right-32 -top-32 size-96 rounded-full bg-primary/20 blur-3xl"
            />

            <div
              aria-hidden
              className="absolute -bottom-40 -left-20 size-80 rounded-full bg-white/5 blur-3xl"
            />

            <div className="relative">
              <p className="text-xs font-bold tracking-[0.2em] text-primary">
                FROM ONE MOMENT TO A SYSTEM
              </p>

              <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight lg:text-5xl">
                A health activity can create value beyond the day itself.
              </h3>

              {/* System flow */}
              <div className="mt-12 space-y-4">
                {/* Gathering */}
                <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                    <span className="text-sm font-bold">01</span>
                  </div>

                  <div>
                    <p className="font-semibold">Health engagement</p>
                    <p className="mt-1 text-sm text-white/55">
                      People participate in a meaningful health activity.
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-6 w-px bg-primary/60" />

                {/* Connected */}
                <div className="flex items-center gap-5 rounded-2xl border border-primary/30 bg-primary/10 p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <Link2 className="size-5" />
                  </div>

                  <div>
                    <p className="font-semibold">Connected health system</p>
                    <p className="mt-1 text-sm text-white/65">
                      Meaningful health information can connect to continuity,
                      support, and follow-up.
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-6 w-px bg-primary/60" />

                {/* Intelligence */}
                <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                    <BrainCircuit className="size-5" />
                  </div>

                  <div>
                    <p className="font-semibold">Population understanding</p>
                    <p className="mt-1 text-sm text-white/55">
                      Aggregated insights can help reveal broader health needs
                      and opportunities for action.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Three principles */}
          <div className="grid gap-px overflow-hidden rounded-[2.5rem] border border-border bg-border">
            {moreThanOutreach.pillars.map((pillar, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={pillar.title}
                  className="relative bg-background p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-7" strokeWidth={1.5} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] text-primary/40">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-3xl font-semibold tracking-tight text-brand-heading">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-muted-foreground">
                    {pillar.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-medium text-primary">
                    <Check className="size-4" />
                    <span>Built into the Health Insight approach</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transformation statement */}
        <div className="mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-10 text-white lg:px-14 lg:py-14">
            <div
              aria-hidden
              className="absolute -right-32 -top-32 size-96 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
              <div className="max-w-4xl">
                <p className="text-xs font-bold tracking-[0.2em] text-white/70">
                  THE DIFFERENCE
                </p>

                <p className="mt-5 text-balance text-2xl font-medium leading-relaxed text-white lg:text-4xl">
                  {moreThanOutreach.closing}
                </p>
              </div>

              <div className="flex size-16 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                <ArrowRight className="size-7" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}