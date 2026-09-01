import {
  Building2,
  Church,
  GraduationCap,
  Users,
  CalendarDays,
  BriefcaseBusiness,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const gatheringIcons = [
  Church,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  CalendarDays,
  Building2,
];

const gatherings = [
  "Faith communities",
  "Workplaces",
  "Schools",
  "Communities",
  "Conferences",
  "Organisations",
];

export function HealthInsightProblem() {
  const { problem } = healthInsight;

  return (
    <section className="relative overflow-hidden border-y border-border bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-24">
          {/* Left marker */}
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {problem.eyebrow}
            </p>

            <div className="mt-8">
              <div className="flex size-20 items-center justify-center rounded-[1.75rem] bg-primary text-white shadow-lg">
                <Users className="size-9" strokeWidth={1.5} />
              </div>
            </div>

            <p className="mt-8 max-w-sm text-lg leading-8 text-muted-foreground">
              People already come together every day.
            </p>
          </div>

          {/* Main content */}
          <div>
            <h2 className="max-w-4xl text-balance text-4xl font-bold leading-[1.02] tracking-tight text-brand-heading lg:text-6xl">
              {problem.title}
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground lg:text-xl">
              {problem.description}
            </p>

            {/* Gathering environments */}
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-3">
              {gatherings.map((gathering, index) => {
                const Icon = gatheringIcons[index];

                return (
                  <div
                    key={gathering}
                    className="group flex items-center gap-4"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </div>

                    <p className="text-sm font-semibold leading-5 text-brand-heading">
                      {gathering}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Closing question */}
            <div className="mt-14 border-l-2 border-primary pl-6 lg:mt-16 lg:pl-8">
              <p className="max-w-3xl text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
                {problem.closing}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}