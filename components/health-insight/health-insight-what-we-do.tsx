import {
  Activity,
  ArrowUpRight,
  HeartPulse,
  Network,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [ShieldCheck, HeartPulse, Network, Activity];

export function HealthInsightWhatWeDo() {
  const { whatWeDo } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="py-20 lg:py-28">
        {/* Introduction */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-primary">
            {whatWeDo.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
            {whatWeDo.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {whatWeDo.description}
          </p>
        </div>

        {/* Capabilities */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2.5rem] border border-border bg-border sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {whatWeDo.capabilities.map((capability, index) => {
            const Icon = icons[index];

            return (
              <div
                key={capability.title}
                className="group relative min-h-[270px] bg-background p-7 transition-colors duration-300 hover:bg-white lg:p-8"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>

                  <span className="text-xs font-bold tracking-[0.18em] text-primary/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-semibold tracking-tight text-brand-heading">
                    {capability.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">
                    {capability.description}
                  </p>
                </div>

                <ArrowUpRight className="absolute bottom-7 right-7 size-5 text-primary/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            );
          })}
        </div>

        {/* Systems statement */}
        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-white">
              <Activity className="size-7" />
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-primary">
                A CONNECTED APPROACH
              </p>

              <p className="mt-1 font-semibold text-brand-heading">
                From individual health to population health.
              </p>
            </div>
          </div>

          <p className="max-w-3xl text-xl font-medium leading-8 text-brand-heading lg:text-2xl">
            Health Insight connects the opportunities to reach people, support
            their health, coordinate appropriate care, and understand what is
            happening across the population.
          </p>
        </div>
      </Container>
    </section>
  );
}