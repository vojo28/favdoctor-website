import {
  PhoneCall,
  Ear,
  MessageCircleHeart,
  Hospital,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { mamascall } from "@/data/mamascall";

const icons = [
  PhoneCall,
  Ear,
  MessageCircleHeart,
  Hospital,
  HeartHandshake,
];

export function MamaCallHowItWorks() {
  const { howItWorks } = mamascall;

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-brand-surface"
    >
      <Container className="py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {howItWorks.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {howItWorks.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {howItWorks.description}
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 lg:mt-20">
          <div className="grid gap-5 sm:grid-cols-2">
            {howItWorks.steps.map((step, index) => {
              const Icon = icons[index];
              const isLast = index === howItWorks.steps.length - 1;

              return (
                <div
                  key={step.number}
                  className={[
                    "group relative overflow-hidden rounded-[2rem] border border-border bg-background p-7 transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-lg",
                    isLast
                      ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc(50%-0.625rem)]"
                      : "",
                  ].join(" ")}
                >
                  <div className="relative">
                    {/* Icon */}
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-7" />
                    </div>

                    {/* Step number */}
                    <p className="mt-7 text-xs font-bold tracking-[0.2em] text-primary">
                      {step.number}
                    </p>

                    {/* Title */}
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-heading">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Next step */}
                    {!isLast && (
                      <div className="mt-7 flex items-center gap-2 text-sm font-medium text-primary">
                        <span>Next step</span>

                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 lg:mt-24">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-background px-8 py-10 lg:px-14 lg:py-14">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 size-80 rounded-full bg-primary/[0.05] blur-3xl"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-3xl text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
                {howItWorks.closing}
              </p>

              <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ArrowRight className="size-7" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}