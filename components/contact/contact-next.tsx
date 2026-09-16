import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { contact } from "@/data/contact";

export function ContactNext() {
  const { next } = contact;

  return (
    <section className="bg-background">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            {next.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-brand-heading sm:text-4xl lg:text-5xl">
            {next.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {next.description}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col divide-y divide-border border-y border-border sm:flex-row sm:divide-x sm:divide-y-0">
          {next.steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-1 items-center gap-4 px-5 py-5 sm:px-6"
            >
              <span className="text-xs font-bold tracking-[0.16em] text-primary">
                {step.number}
              </span>

              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-brand-heading">
                  {step.title}
                </span>

                {step.number !== "03" && (
                  <ArrowRight className="size-4 shrink-0 text-primary/40" />
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}