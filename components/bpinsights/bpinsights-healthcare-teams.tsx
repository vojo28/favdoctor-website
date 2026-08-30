import {
  Hospital,
  Pill,
  MapPinned,
  Building2,
  Microscope,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { bpinsights } from "@/data/bpinsights";

const icons = [
  Hospital,
  Pill,
  MapPinned,
  Building2,
  Microscope,
];

export function BPInsightsHealthcareTeams() {
  const { healthcareTeams } = bpinsights;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {healthcareTeams.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {healthcareTeams.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {healthcareTeams.description}
          </p>
        </div>

        {/* Deployment visual */}
        <div className="relative mt-16 lg:mt-20">
          <div className="grid gap-5 lg:grid-cols-[1fr_1.35fr]">
            {/* Main system panel */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-primary-foreground lg:p-10">
              <div
                aria-hidden
                className="absolute -right-24 -top-24 size-80 rounded-full bg-white/10 blur-3xl"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15">
                  <Hospital className="size-7" />
                </div>

                <div className="mt-auto pt-16">
                  <p className="text-xs font-bold tracking-[0.2em] text-primary-foreground/70">
                    ACROSS THE CARE JOURNEY
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight lg:text-4xl">
                    One view. Multiple points of care.
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-primary-foreground/75">
                    BP Insights can support different healthcare environments
                    while helping teams maintain visibility into the people
                    they serve.
                  </p>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="grid gap-px overflow-hidden rounded-[2.5rem] border border-border bg-border sm:grid-cols-2">
              {healthcareTeams.settings.map((setting, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={setting.title}
                    className="group relative bg-background p-7 transition-colors duration-300 hover:bg-white lg:p-8"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </div>

                      <span className="text-xs font-bold tracking-[0.2em] text-primary/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold tracking-tight text-brand-heading">
                        {setting.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {setting.description}
                      </p>
                    </div>

                    <ArrowUpRight className="absolute bottom-7 right-7 size-5 text-primary/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 max-w-4xl border-l-2 border-primary pl-6 lg:mt-20 lg:pl-8">
          <p className="text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
            Better cardiovascular care depends on having better visibility
            across the patient journey.
          </p>
        </div>
      </Container>
    </section>
  );
}