import {
  BriefcaseBusiness,
  Church,
  Users,
  GraduationCap,
  HandHeart,
  Presentation,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [
  BriefcaseBusiness,
  Church,
  Users,
  GraduationCap,
  HandHeart,
  Presentation,
];

export function HealthInsightSettings() {
  const { settings } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {settings.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
              {settings.title}
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            {settings.description}
          </p>
        </div>

        {/* Settings grid */}
        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-2">
          {settings.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-10"
              >
                {/* Background number */}
                <span
                  aria-hidden
                  className="absolute -right-3 -top-8 text-[10rem] font-bold leading-none tracking-tighter text-primary/[0.04]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex size-16 items-center justify-center rounded-[1.5rem] bg-primary/10 text-primary">
                      <Icon className="size-8" strokeWidth={1.5} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] text-primary/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-12 max-w-xl">
                    <h3 className="text-3xl font-semibold tracking-tight text-brand-heading">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom link */}
                  <div className="mt-10 flex items-center gap-4 text-primary">
                    <span className="text-sm font-medium">
                      Health opportunities built around your population
                    </span>

                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 border-t border-border pt-10 lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-5xl text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
              Different populations have different health needs. Health Insight
              is designed to create health opportunities around the people you
              bring together.
            </p>

            <div className="hidden size-16 items-center justify-center rounded-full bg-primary text-white lg:flex">
              <Users className="size-7" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}