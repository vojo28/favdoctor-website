import {
  Activity,
  ScanSearch,
  BrainCircuit,
  ShieldCheck,
  HeartPulse,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { bpinsights } from "@/data/bpinsights";

const icons = [
  Activity,
  ScanSearch,
  BrainCircuit,
  ShieldCheck,
  HeartPulse,
  TrendingUp,
];

export function BPInsightsCapabilities() {
  const { capabilities } = bpinsights;

  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[42%_58%] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-wider text-primary">
              {capabilities.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
              {capabilities.title}
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            Cardiovascular health is not defined by a single moment. BP Insights
            is designed to support the journey from understanding what is
            happening to taking action that can change what happens next.
          </p>
        </div>

        {/* Capability map */}
        <div className="mt-16 lg:mt-20">
          <div className="grid gap-px overflow-hidden rounded-[2.5rem] border border-border bg-border lg:grid-cols-6">
            {capabilities.items.map((item, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={item.title}
                  className={`group relative min-h-[280px] bg-background p-7 transition-colors duration-300 hover:bg-brand-surface lg:p-8 ${
                    index === 0
                      ? "lg:col-span-2"
                      : index === 1
                        ? "lg:col-span-2"
                        : index === 2
                          ? "lg:col-span-2"
                          : index === 3
                            ? "lg:col-span-2"
                            : index === 4
                              ? "lg:col-span-2"
                              : "lg:col-span-2"
                  }`}
                >
                  {/* Capability number */}
                  <span
                    aria-hidden
                    className="absolute right-7 top-6 text-7xl font-bold leading-none tracking-tight text-primary/[0.04]"
                  >
                    0{index + 1}
                  </span>

                  <div className="relative flex h-full flex-col">
                    {/* Icon */}
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>

                    {/* Content */}
                    <div className="mt-auto pt-12">
                      <p className="text-xs font-bold tracking-[0.2em] text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-heading">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 right-0 flex size-10 items-center justify-center rounded-full border border-border text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowUpRight className="size-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 max-w-4xl border-l-2 border-primary pl-6 lg:mt-16 lg:pl-8">
          <p className="text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
            Monitor what matters. Recognize change. Act earlier. Manage better.
          </p>
        </div>
      </Container>
    </section>
  );
}