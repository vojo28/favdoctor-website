import {
  HeartPulse,
  Target,
  Clock3,
  ArrowDownRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { mamascall } from "@/data/mamascall";

const icons = [HeartPulse, Target, Clock3];

export function MamaCallChallenge() {
  const { maternalChallenge } = mamascall;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      {/* Soft background atmosphere */}
      <div
        aria-hidden
        className="absolute -left-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {maternalChallenge.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {maternalChallenge.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {maternalChallenge.description}
          </p>
        </div>

        {/* Statistics */}
        <div className="relative mt-16 lg:mt-20">
          {/* Desktop connecting line */}
          <div
            aria-hidden
            className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-border lg:block"
          />

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {maternalChallenge.stats.map((stat, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={stat.label}
                  className="relative"
                >
                 {/* Icon */}
<div className="relative z-10 flex size-20 items-center justify-center overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-sm">
  <Icon className="size-8 text-primary" />

  {/* Step number */}
  <span className="absolute right-3 top-2 text-[10px] font-bold tracking-widest text-muted-foreground">
    0{index + 1}
  </span>
</div>

                  {/* Statistic */}
                  <div className="mt-8">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-5xl font-bold tracking-tight text-brand-heading lg:text-6xl">
                        {stat.value}
                      </span>

                      {stat.suffix && (
                        <span className="text-sm font-medium text-muted-foreground">
                          {stat.suffix}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 max-w-sm text-lg font-semibold leading-snug text-brand-heading">
                      {stat.label}
                    </h3>

                    <p className="mt-3 text-sm text-muted-foreground">
                      {stat.note}
                    </p>
                  </div>

                  {/* Mobile flow arrow */}
                  {index < maternalChallenge.stats.length - 1 && (
                    <div className="mt-8 flex lg:hidden">
                      <ArrowDownRight className="size-6 text-primary/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing / Opportunity */}
        <div className="mt-20 lg:mt-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background px-8 py-10 lg:px-12 lg:py-14">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/5 blur-3xl"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold tracking-wider text-primary">
                  WHY THIS MATTERS
                </p>

                <p className="mt-4 text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
                  {maternalChallenge.closing}
                </p>
              </div>

              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ArrowDownRight className="size-6" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}