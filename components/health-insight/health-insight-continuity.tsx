import {
  UserRound,
  ClipboardCheck,
  MessageCircleHeart,
  Stethoscope,
  ArrowRight,
  CircleCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const icons = [
  UserRound,
  ClipboardCheck,
  MessageCircleHeart,
  Stethoscope,
];

export function HealthInsightContinuity() {
  const { continuity } = healthInsight;

  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {continuity.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
              {continuity.title}
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            {continuity.description}
          </p>
        </div>

        {/* Main continuity system */}
        <div className="mt-16 lg:mt-20">
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left panel */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-white lg:p-10">
              {/* Background */}
              <div
                aria-hidden
                className="absolute -right-28 -top-28 size-80 rounded-full bg-white/10 blur-3xl"
              />

              <div
                aria-hidden
                className="absolute -bottom-32 -left-24 size-72 rounded-full bg-white/5 blur-3xl"
              />

              <div className="relative flex h-full min-h-[520px] flex-col">
                {/* Icon */}
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15">
                  <UserRound className="size-7" strokeWidth={1.5} />
                </div>

                {/* Journey visual */}
                <div className="flex flex-1 items-center justify-center py-10">
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-8 h-[190px] w-px -translate-x-1/2 bg-white/20" />

                    <div className="relative flex flex-col items-center gap-7">
                      {/* Person */}
                      <div className="flex size-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <UserRound className="size-7" />
                      </div>

                      {/* Connection */}
                      <div className="flex size-12 items-center justify-center rounded-full bg-white text-primary shadow-lg">
                        <CircleCheck
                          className="size-6"
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Care */}
                      <div className="flex size-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <Stethoscope
                          className="size-7"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-white/70">
                    THE JOURNEY CONTINUES
                  </p>

                  <h3 className="mt-4 max-w-md text-3xl font-semibold tracking-tight lg:text-4xl">
                    Reaching someone is only the first step.
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-white/70">
                    Health Insight creates opportunities to help people move
                    from health engagement to the next appropriate action.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — continuity steps */}
            <div className="grid gap-px overflow-hidden rounded-[2.5rem] border border-border bg-border sm:grid-cols-2">
              {continuity.steps.map((step, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={step.title}
                    className="group relative min-h-[260px] bg-background p-7 lg:p-8"
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-6" strokeWidth={1.5} />
                      </div>

                      <span className="text-xs font-bold tracking-[0.2em] text-primary/40">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold tracking-tight text-brand-heading">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    {index < continuity.steps.length - 1 && (
                      <ArrowRight className="absolute bottom-7 right-7 size-5 text-primary/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Important message */}
        <div className="mt-16 lg:mt-20">
          <div className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:pt-14">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-primary">
                CLOSING THE GAP
              </p>

              <p className="mt-4 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-brand-heading lg:text-4xl">
                A health concern should not disappear simply because the
                gathering has ended.
              </p>
            </div>

            <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
              {continuity.closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}