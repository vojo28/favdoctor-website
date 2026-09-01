import {
  BriefcaseBusiness,
  Church,
  MapPinned,
  GraduationCap,
  Presentation,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [
  BriefcaseBusiness,
  Church,
  MapPinned,
  GraduationCap,
  Presentation,
  CalendarDays,
];

export function HealthInsightGatherings() {
  const { gatherings } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {gatherings.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
              {gatherings.title}
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            {gatherings.description}
          </p>
        </div>

        {/* Gathering grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {gatherings.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="group relative min-h-[280px] overflow-hidden rounded-[2rem] border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-8"
              >
                {/* Background number */}
                <span
                  aria-hidden
                  className="absolute -right-3 -top-8 select-none text-[9rem] font-bold leading-none tracking-tighter text-primary/[0.035]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-full flex-col">
                  {/* Icon */}
                  <div className="flex size-14 items-center justify-center rounded-[1.25rem] bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-7" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="mt-auto pt-12">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight text-brand-heading">
                        {item.title}
                      </h3>

                      <ArrowUpRight className="size-5 shrink-0 text-primary/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                    </div>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-3xl text-balance text-xl font-medium leading-relaxed text-brand-heading lg:text-2xl">
            Wherever people gather, there is an opportunity to make health
            more present in everyday life.
          </p>

          <div className="flex shrink-0 items-center gap-3 text-sm font-medium text-primary">
            <span className="size-2 rounded-full bg-primary" />
            Health can meet people where they are
          </div>
        </div>
      </Container>
    </section>
  );
}