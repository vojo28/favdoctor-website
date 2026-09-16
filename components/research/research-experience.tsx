import {
  ArrowUpRight,
  Building2,
  FlaskConical,
  Globe2,
  Landmark,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { research } from "@/data/research";

const icons = [Landmark, FlaskConical, Globe2, Building2];

export function ResearchExperience() {
  const { experience } = research;

  return (
    <section className="relative overflow-hidden bg-background">
      <Container className="relative py-20 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {experience.eyebrow}
            </p>

            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {experience.title}
            </h2>
          </div>

          <div className="flex justify-start lg:justify-end">
            <p className="w-full max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {experience.description}
            </p>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="relative mt-16 lg:mt-20">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute bottom-0 left-6 top-0 hidden w-px bg-border md:block"
          />

          <div className="space-y-0">
            {experience.projects.map((project, index) => {
              const Icon = icons[index];

              return (
                <article
                  key={project.organisation}
                  className="group relative grid gap-6 border-b border-border py-8 first:border-t md:grid-cols-[80px_0.7fr_1.3fr] md:items-center md:gap-8 md:py-10 md:pl-0"
                >
                  {/* Node */}
                  <div className="relative z-10 flex items-center">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-background text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                      <Icon className="size-5" strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Organisation */}
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-primary/50">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-brand-heading sm:text-3xl">
                      {project.organisation}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex items-start justify-between gap-6">
                    <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                      {project.description}
                    </p>

                    <ArrowUpRight className="mt-1 hidden size-5 shrink-0 text-primary/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary sm:block" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="relative mt-14 overflow-hidden rounded-[2.5rem] bg-brand-heading px-8 py-10 text-white sm:px-10 lg:mt-20 lg:px-14 lg:py-14">
          <div
            aria-hidden
            className="absolute -right-32 -top-32 size-[28rem] rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative max-w-4xl">
            <p className="text-xs font-bold tracking-[0.2em] text-white/60">
              WHAT THIS EXPERIENCE MEANS
            </p>

            <p className="mt-5 text-balance text-2xl font-semibold leading-9 tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-tight">
              {experience.closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}