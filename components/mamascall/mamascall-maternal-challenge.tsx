import { AlertTriangle, Target, HeartPulse } from "lucide-react";

import { Container } from "@/components/layout/container";
import { mamascall } from "@/data/mamascall";

const icons = [HeartPulse, AlertTriangle, Target];

export function MamaCallMaternalChallenge() {
  const { maternalChallenge } = mamascall;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {maternalChallenge.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {maternalChallenge.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {maternalChallenge.description}
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {maternalChallenge.stats.map((stat, index) => {
            const Icon = icons[index];

            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-background p-7 lg:p-8"
              >
               {/* Large background number */}
        <span
          aria-hidden
          className="absolute right-6 top-5 text-[7rem] font-bold leading-none text-primary/[0.06]"
        >
          0{index + 1}
        </span>

                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>

                  <div className="mt-10">
                    <p className="text-5xl font-bold tracking-tight text-brand-heading lg:text-6xl">
                      {stat.value}
                      {stat.suffix && (
                        <span className="ml-2 text-xl font-medium lg:text-2xl">
                          {stat.suffix}
                        </span>
                      )}
                    </p>

                    <p className="mt-4 text-base font-medium leading-7 text-brand-heading">
                      {stat.label}
                    </p>

                    <p className="mt-3 text-sm text-muted-foreground">
                      {stat.note}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 max-w-4xl border-l-2 border-primary pl-6 lg:mt-16 lg:pl-8">
          <p className="text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
            {maternalChallenge.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}