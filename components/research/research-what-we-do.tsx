import {
  ArrowUpRight,
  Database,
  HeartHandshake,
  Radio,
  Search,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { research } from "@/data/research";

const icons = [
  Search,
  Database,
  Users,
  HeartHandshake,
  Radio,
];

export function ResearchWhatWeDo() {
  const { whatWeDo } = research;

  return (
    <section id="research-work" className="relative overflow-hidden bg-background">
      <Container className="relative py-20 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {whatWeDo.eyebrow}
            </p>

            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {whatWeDo.title}
            </h2>
          </div>

          <div className="flex justify-start lg:justify-end">
            <p className="w-full max-w-xl text-xl font-medium leading-8 text-muted-foreground sm:text-2xl lg:text-3xl lg:leading-10">
              {whatWeDo.description}
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-16 border-t border-border lg:mt-20">
          {whatWeDo.capabilities.map((capability, index) => {
            const Icon = icons[index];

            return (
              <div
                key={capability.title}
                className="group grid gap-6 border-b border-border py-8 transition-colors duration-300 hover:bg-brand-surface/60 lg:grid-cols-[80px_0.8fr_1.2fr_40px] lg:items-center lg:px-6"
              >
                {/* Number / icon */}
                <div className="flex items-center gap-4 lg:block">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-bold tracking-[0.18em] text-primary/50 lg:mt-3 lg:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold tracking-tight text-brand-heading sm:text-3xl">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {capability.description}
                </p>

                {/* Arrow */}
                <ArrowUpRight className="hidden size-5 text-primary/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary lg:block" />
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-14 max-w-4xl lg:mt-16">
          <p className="text-balance text-2xl font-semibold leading-9 tracking-tight text-brand-heading sm:text-3xl lg:text-4xl lg:leading-tight">
            From research design to field implementation, we help build the
            systems that make research work in practice.
          </p>
        </div>
      </Container>
    </section>
  );
}