import {
  HeartPulse,
  Clock3,
  Activity,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [
  Activity,
  ShieldCheck,
  HeartPulse,
];

export function HealthInsightBiggerGoal() {
  const { biggerGoal } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-background">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {biggerGoal.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
              {biggerGoal.title}
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            {biggerGoal.description}
          </p>
        </div>

        {/* Main visual statement */}
        <div className="mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-white lg:p-12">
            {/* Background */}
            <div
              aria-hidden
              className="absolute -right-32 -top-32 size-96 rounded-full bg-white/10 blur-3xl"
            />

            <div
              aria-hidden
              className="absolute -bottom-40 -left-20 size-80 rounded-full bg-white/5 blur-3xl"
            />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
              <div className="max-w-4xl">
                <p className="text-xs font-bold tracking-[0.2em] text-white/75">
                  THE LONG-TERM OPPORTUNITY
                </p>

                <h3 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-white lg:text-5xl">
                  Healthier lives begin long before someone becomes seriously
                  ill.
                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                  The future of population health cannot depend only on treating
                  illness after it becomes severe. It also depends on creating
                  more opportunities for prevention, earlier awareness, and
                  continued support throughout people's lives.
                </p>
              </div>

              {/* Icon */}
              <div className="hidden size-32 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 lg:flex">
                <Clock3
                  className="size-16 text-white"
                  strokeWidth={1.25}
                />
              </div>
            </div>
          </div>
        </div>

        {/* What needs to change */}
        <div className="mt-16 lg:mt-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              WHAT NEEDS TO CHANGE
            </p>

            <h3 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-heading lg:text-5xl">
              Better health outcomes require more than waiting for people to
              enter the healthcare system.
            </h3>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {biggerGoal.principles.map((principle, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={principle.title}
                  className="group relative rounded-[2rem] border border-border bg-brand-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-background hover:shadow-lg lg:p-9"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-7" strokeWidth={1.5} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] text-primary/40">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="mt-10 text-2xl font-semibold tracking-tight text-brand-heading">
                    {principle.title}
                  </h4>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {principle.description}
                  </p>

                  <ArrowUpRight className="mt-8 size-5 text-primary/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Final statement */}
        <div className="mt-20 border-t border-border pt-12 lg:mt-28 lg:pt-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-5xl text-balance text-3xl font-medium leading-tight text-brand-heading lg:text-5xl">
              The goal is bigger than one screening, one event, or one health
              programme. It is to create more opportunities for people to stay
              healthier for longer.
            </p>

            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <HeartPulse className="size-7" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}