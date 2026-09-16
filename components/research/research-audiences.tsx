import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Microscope,
  Stethoscope,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { research } from "@/data/research";

const icons = [
  Microscope,
  GraduationCap,
  Landmark,
  HeartPulse,
  Stethoscope,
  Building2,
];

export function ResearchAudiences() {
  const { audiences } = research;

  return (
    <section className="relative overflow-hidden bg-background">
      <Container className="relative py-20 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {audiences.eyebrow}
            </p>

            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {audiences.title}
            </h2>
          </div>
        </div>

        {/* Audience list */}
        <div className="mt-14 border-t border-border lg:mt-16">
          {audiences.organisations.map((organisation, index) => {
            const Icon = icons[index];

            return (
              <div
                key={organisation.title}
                className="group grid gap-5 border-b border-border py-7 sm:grid-cols-[64px_0.8fr_1.2fr] sm:items-center sm:gap-8 lg:px-4"
              >
                {/* Icon */}
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-surface text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" strokeWidth={1.7} />
                </div>

                {/* Number + title */}
                <div>
                  <span className="text-xs font-bold tracking-[0.18em] text-primary/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-brand-heading sm:text-2xl">
                    {organisation.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {organisation.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 max-w-3xl lg:mt-16">
          <p className="text-balance text-2xl font-semibold leading-9 tracking-tight text-brand-heading sm:text-3xl lg:text-4xl">
            Different organisations. Different research questions. One shared
            need: turning evidence into meaningful action.
          </p>
        </div>
      </Container>
    </section>
  );
}