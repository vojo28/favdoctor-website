import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarHeart,
  Handshake,
  House,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { healthInsight } from "@/data/health-insight";

const icons = [
  Building2,
  CalendarHeart,
  House,
  Handshake,
];

export function HealthInsightImpact() {
  const { impact } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="py-20 lg:py-28">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {impact.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              Health can become part of the environment you already manage.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            {impact.description}
          </p>
        </div>

        {/* Audience list */}
        <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-border bg-background lg:mt-20">
          {impact.audiences.map((audience, index) => {
            const Icon = icons[index];

            return (
              <div
                key={audience.title}
                className="group grid gap-6 border-b border-border p-7 last:border-b-0 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-9"
              >
                {/* Icon */}
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tracking-[0.18em] text-primary/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-xl font-semibold tracking-tight text-brand-heading sm:text-2xl">
                      {audience.title}
                    </h3>
                  </div>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {audience.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden size-11 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:flex">
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-6 rounded-[2.5rem] bg-background p-7 sm:p-9 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div>
            <p className="text-xl font-semibold text-brand-heading">
              Have a population you want to support?
            </p>

            <p className="mt-2 text-muted-foreground">
              Let's explore what Health Insight could look like in your
              environment.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="h-12 shrink-0 rounded-full px-7"
          >
            <Link href={impact.cta.href}>
              {impact.cta.label}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}