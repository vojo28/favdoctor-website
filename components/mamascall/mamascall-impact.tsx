import { PhoneCall, HeartHandshake, CalendarDays } from "lucide-react";

import { Container } from "@/components/layout/container";
import { mamascall } from "@/data/mamascall";

const icons = [PhoneCall, HeartHandshake, CalendarDays];

export function MamaCallImpact() {
  const { impact } = mamascall;

  return (
    <section className="border-y border-border bg-brand-surface">
      <Container className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[42%_58%] lg:items-end">
          {/* Introduction */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {impact.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-5xl">
              {impact.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {impact.description}
            </p>
          </div>

          {/* Impact numbers */}
          <div className="grid gap-4 sm:grid-cols-3">
            {impact.stats.map((stat, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={stat.label}
                  className="group rounded-3xl border border-border bg-background p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>

                  <p className="mt-8 text-4xl font-bold tracking-tight text-brand-heading lg:text-5xl">
                    {stat.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}