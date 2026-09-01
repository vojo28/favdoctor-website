import {
  BadgeCheck,
  Link2,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [
  BadgeCheck,
  Link2,
  BrainCircuit,
];

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

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground lg:text-xl">
            {moreThanOutreach.description}
          </p>
        </div>

        {/* Three pillars */}
        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-3">
          {moreThanOutreach.pillars.map((pillar, index) => {
            const Icon = icons[index];

            return (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-brand-surface p-8 lg:p-10"
              >
                {/* Background number */}
                <span
                  aria-hidden
                  className="absolute -right-4 -top-8 select-none text-[10rem] font-bold leading-none tracking-tighter text-primary/[0.04]"
                >
                  0{index + 1}
                </span>

                <div className="relative">
                  {/* Icon */}
                  <div className="flex size-16 items-center justify-center rounded-[1.5rem] bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-8" strokeWidth={1.5} />
                  </div>

                  {/* Label */}
                  <p className="mt-10 text-xs font-bold tracking-[0.2em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  {/* Title */}
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-brand-heading">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* System transformation */}
        <div className="mt-16 lg:mt-24">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-10 text-white lg:px-14 lg:py-14">
            {/* Atmosphere */}
            <div
              aria-hidden
              className="absolute -right-32 -top-32 size-96 rounded-full bg-white/10 blur-3xl"
            />

            <div
              aria-hidden
              className="absolute -bottom-40 -left-20 size-80 rounded-full bg-white/5 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
              {/* Content */}
              <div className="max-w-4xl">
                <p className="text-xs font-bold tracking-[0.2em] text-white/75">
                  THE DIFFERENCE
                </p>

                <p className="mt-5 text-balance text-2xl font-medium leading-relaxed text-white lg:text-4xl">
                  {moreThanOutreach.closing}
                </p>
              </div>

              {/* Visual */}
              <div className="hidden size-28 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:flex">
                <ArrowRight className="size-12" strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}