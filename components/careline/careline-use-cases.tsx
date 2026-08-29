import {
  ArrowUpRight,
  HeartPulse,
  Microscope,
  Users,
  Stethoscope,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { careline } from "@/data/careline";

const icons = [
  HeartPulse,
  Microscope,
  Users,
  Stethoscope,
  MapPin,
  Sparkles,
];

export function CareLineUseCases() {
  const { useCases } = careline;

  return (
    <section className="bg-background">
      <Container className="pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {useCases.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-5xl">
            {useCases.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>

                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-brand-heading">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}