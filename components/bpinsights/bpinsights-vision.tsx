import {
  Eye,
  ShieldCheck,
  BrainCircuit,
  Activity,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { bpinsights } from "@/data/bpinsights";

const icons = [
  Eye,
  ShieldCheck,
  BrainCircuit,
  Activity,
];

export function BPInsightsVision() {
  const { vision } = bpinsights;

  return (
    <section className="relative overflow-hidden bg-brand-heading text-white">
      {/* Ambient background */}
      <div
        aria-hidden
        className="absolute -left-40 top-0 size-[34rem] rounded-full bg-primary/20 blur-[140px]"
      />

      <div
        aria-hidden
        className="absolute -bottom-48 right-0 size-[34rem] rounded-full bg-primary/10 blur-[140px]"
      />

      <Container className="relative py-20 lg:py-32">
        {/* Main vision statement */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {vision.eyebrow}
            </p>

            <h2 className="mt-6 text-balance text-5xl font-bold leading-[0.98] tracking-tight lg:text-7xl">
              {vision.title}
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-white/65 lg:justify-self-end">
            {vision.description}
          </p>
        </div>

        {/* Vision pillars */}
        <div className="mt-20 border-t border-white/10 lg:mt-28">
          <div className="grid lg:grid-cols-4">
            {[
              {
                title: "Understand",
                description:
                  "Continuously understand the changing cardiovascular health picture.",
              },
              {
                title: "Recognize",
                description:
                  "Recognize emerging signals and changing patterns earlier.",
              },
              {
                title: "Prevent",
                description:
                  "Create more opportunities for proactive cardiovascular health.",
              },
              {
                title: "Manage",
                description:
                  "Support better decisions throughout the journey of care.",
              },
            ].map((item, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={item.title}
                  className="group relative border-b border-white/10 px-0 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-primary">
                      <Icon className="size-5" />
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] text-white/30">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.description}
                  </p>

                  <ArrowUpRight className="mt-7 size-5 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 border-t border-white/10 pt-10 lg:mt-20 lg:pt-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-5xl text-balance text-3xl font-medium leading-tight lg:text-5xl">
              {vision.closing}
            </p>

            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ArrowUpRight className="size-6" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}