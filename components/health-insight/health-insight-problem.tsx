import {
  ArrowRight,
  CircleAlert,
  CircleCheck,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const reactiveJourney = [
  {
    title: "Problem appears",
    description: "Something feels wrong.",
    icon: CircleAlert,
  },
  {
    title: "Health check",
    description: "The person seeks help.",
    icon: Stethoscope,
  },
  {
    title: "Diagnosis",
    description: "The problem is identified.",
    icon: CircleCheck,
  },
  {
    title: "Treatment",
    description: "Care begins.",
    icon: HeartPulse,
  },
];

const proactiveJourney = [
  {
    title: "Understand",
    description: "Know your health earlier.",
    icon: HeartPulse,
  },
  {
    title: "Identify",
    description: "Recognise emerging risks.",
    icon: CircleAlert,
  },
  {
    title: "Act",
    description: "Take action before problems grow.",
    icon: CircleCheck,
  },
  {
    title: "Stay supported",
    description: "Remain connected to care.",
    icon: Stethoscope,
  },
];

export function HealthInsightProblem() {
  const { problem } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-background">
      <Container className="py-20 lg:py-28">
        {/* Section heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-primary">
            {problem.eyebrow}
          </p>

          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
            {problem.title}
          </h2>
        </div>

        {/* Two journeys */}
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
          {/* Reactive journey */}
          <div className="rounded-[2.5rem] border border-border bg-background p-7 sm:p-9 lg:p-10">
            <p className="text-xs font-bold tracking-[0.18em] text-muted-foreground">
              THE WAY IT OFTEN WORKS
            </p>

            <h3 className="mt-5 max-w-md text-2xl font-semibold leading-tight tracking-tight text-brand-heading sm:text-3xl">
              Too often, health is addressed only after a problem appears.
            </h3>

            <div className="mt-10">
              {reactiveJourney.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === reactiveJourney.length - 1;

                return (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-brand-surface">
                        <Icon
                          className="size-5 text-muted-foreground"
                          strokeWidth={1.8}
                        />
                      </div>

                      {!isLast && (
                        <div className="my-2 h-9 border-l border-dashed border-border" />
                      )}
                    </div>

                    <div className="pt-1">
                      <p className="font-semibold text-brand-heading">
                        {step.title}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 border-t border-border pt-7">
              <p className="text-sm font-medium text-muted-foreground">
                Care begins when illness becomes the reason to act.
              </p>
            </div>
          </div>

          {/* Proactive journey */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-surface p-7 sm:p-9 lg:p-10">
            <div
              aria-hidden
              className="absolute -right-28 -top-28 size-72 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative">
              <p className="text-xs font-bold tracking-[0.18em] text-primary">
                A DIFFERENT START
              </p>

              <h3 className="mt-5 max-w-md text-2xl font-semibold leading-tight tracking-tight text-brand-heading sm:text-3xl">
                What if we could start earlier?
              </h3>

              <div className="mt-10">
                {proactiveJourney.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === proactiveJourney.length - 1;

                  return (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <Icon
                            className="size-5"
                            strokeWidth={1.8}
                          />
                        </div>

                        {!isLast && (
                          <div className="my-2 h-9 border-l border-dashed border-primary/30" />
                        )}
                      </div>

                      <div className="pt-1">
                        <p className="font-semibold text-brand-heading">
                          {step.title}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 border-t border-border pt-7">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-brand-heading">
                    Health becomes a continuous journey
                  </p>

                  <ArrowRight className="size-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing thought */}
        <div className="mx-auto mt-12 max-w-3xl text-center lg:mt-16">
          <p className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            We believe there is a better way — one that creates opportunities
            to understand health earlier, act sooner, and stay connected to
            appropriate care.
          </p>
        </div>
      </Container>
    </section>
  );
}