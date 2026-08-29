import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { careline } from "@/data/careline";

export function CareLineHowItWorks() {
  const { howItWorks } = careline;

  return (
    <section className="bg-background">
      <Container className="pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {howItWorks.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-5xl">
            {howItWorks.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {howItWorks.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, index) => (
            <div key={step.number} className="relative">
              <article className="h-full rounded-3xl border border-border bg-card p-7">
                <p className="text-sm font-semibold text-primary">
                  {step.number}
                </p>

                <h3 className="mt-6 text-xl font-semibold text-brand-heading">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </article>

              {index < howItWorks.steps.length - 1 && (
                <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                  <div className="flex size-10 items-center justify-center rounded-full border border-border bg-background">
                    <ArrowRight className="size-4 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}