import {
  Church,
  Building2,
  Users,
  GraduationCap,
  HeartHandshake,
  CalendarDays,
  Network,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [
  Church,
  Building2,
  Users,
  GraduationCap,
  HeartHandshake,
  CalendarDays,
];

export function HealthInsightEnvironments() {
  const { environments } = healthInsight;

  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {environments.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
              {environments.title}
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            {environments.description}
          </p>
        </div>

        {/* Main environments layout */}
        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left system panel */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-white lg:p-10">
            {/* Background */}
            <div
              aria-hidden
              className="absolute -right-28 -top-28 size-80 rounded-full bg-white/10 blur-3xl"
            />

            <div
              aria-hidden
              className="absolute -bottom-40 -left-32 size-96 rounded-full bg-white/5 blur-3xl"
            />

            <div className="relative flex min-h-[620px] flex-col">
              {/* Top icon */}
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15">
                <Network className="size-7" strokeWidth={1.5} />
              </div>

              {/* Central visual */}
              <div className="flex flex-1 items-center justify-center py-12">
                <div className="relative flex size-52 items-center justify-center">
                  {/* Connection rings */}
                  <div className="absolute inset-0 rounded-full border border-white/15" />

                  <div className="absolute inset-8 rounded-full border border-white/15" />

                  {/* Connecting points */}
                  <div className="absolute left-1/2 top-0 size-4 -translate-x-1/2 rounded-full bg-white" />

                  <div className="absolute bottom-5 left-2 size-3 rounded-full bg-white/70" />

                  <div className="absolute bottom-5 right-2 size-3 rounded-full bg-white/70" />

                  <div className="absolute left-1 top-1/2 size-3 -translate-y-1/2 rounded-full bg-white/50" />

                  <div className="absolute right-1 top-1/2 size-3 -translate-y-1/2 rounded-full bg-white/50" />

                  {/* Centre */}
                  <div className="relative flex size-28 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Network
                      className="size-14 text-white"
                      strokeWidth={1.25}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-white/70">
                  ONE SYSTEM. MANY GATHERINGS.
                </p>

                <h3 className="mt-4 max-w-md text-3xl font-semibold tracking-tight lg:text-4xl">
                  Wherever people gather, health can become part of the
                  conversation.
                </h3>

                <p className="mt-4 max-w-md leading-7 text-white/70">
                  Health Insight can adapt to different environments while
                  creating a more connected approach to population health.
                </p>
              </div>
            </div>
          </div>

          {/* Environment cards */}
          <div className="grid gap-px overflow-hidden rounded-[2.5rem] border border-border bg-border sm:grid-cols-2">
            {environments.items.map((item, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={item.title}
                  className={`group relative bg-background p-7 transition-colors duration-300 hover:bg-brand-surface lg:p-8 ${
                    index === environments.items.length - 1 &&
                    environments.items.length % 2 !== 0
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" strokeWidth={1.5} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] text-primary/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-8 max-w-md">
                    <h3 className="text-xl font-semibold tracking-tight text-brand-heading">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight className="absolute bottom-7 right-7 size-5 text-primary/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-16 border-t border-border pt-10 lg:mt-20 lg:pt-14">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              BUILT AROUND PEOPLE
            </p>

            <p className="max-w-4xl text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
              {environments.closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}