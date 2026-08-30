import {
  Activity,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  Zap,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { bpinsights } from "@/data/bpinsights";

const icons = [
  Activity,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  Zap,
];

export function BPInsightsIndividuals() {
  const { individuals } = bpinsights;

  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[45%_55%] lg:items-center lg:gap-20">
          {/* Left: Existing content */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {individuals.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
              {individuals.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {individuals.description}
            </p>

            {/* Existing benefits */}
            <div className="mt-10 space-y-5">
              {individuals.items.map((item, index) => {
                const Icon = icons[index];

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-brand-heading">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Health journey visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-brand-surface p-6 sm:p-8 lg:p-10">
              {/* Ambient background */}
              <div
                aria-hidden
                className="absolute -right-24 -top-24 size-80 rounded-full bg-primary/[0.08] blur-3xl"
              />

              {/* Header */}
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-primary">
                    YOUR HEALTH JOURNEY
                  </p>

                  <p className="mt-2 text-xl font-semibold text-brand-heading">
                    A picture that grows over time
                  </p>
                </div>

                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-background text-primary shadow-sm">
                  <HeartHandshake className="size-5" />
                </div>
              </div>

              {/* Journey timeline */}
              <div className="relative mt-10">
                {/* Timeline */}
                <div
                  aria-hidden
                  className="absolute bottom-6 left-5 top-6 w-px bg-border"
                />

                <div className="space-y-7">
                  {/* 01 */}
                  <div className="relative flex gap-5">
                    <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-4 border-brand-surface bg-primary text-primary-foreground">
                      <Activity className="size-4" />
                    </div>

                    <div className="pt-1">
                      <p className="text-sm font-semibold text-brand-heading">
                        Health information
                      </p>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Readings and relevant information begin building a
                        health history.
                      </p>
                    </div>
                  </div>

                  {/* 02 */}
                  <div className="relative flex gap-5">
                    <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-4 border-brand-surface bg-primary text-primary-foreground">
                      <TrendingUp className="size-4" />
                    </div>

                    <div className="pt-1">
                      <p className="text-sm font-semibold text-brand-heading">
                        Changes over time
                      </p>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        A growing history makes changes and patterns easier to
                        understand.
                      </p>
                    </div>
                  </div>

                  {/* 03 */}
                  <div className="relative flex gap-5">
                    <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-4 border-brand-surface bg-primary text-primary-foreground">
                      <ShieldCheck className="size-4" />
                    </div>

                    <div className="pt-1">
                      <p className="text-sm font-semibold text-brand-heading">
                        Earlier awareness
                      </p>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Meaningful changes can become easier to recognize and
                        respond to.
                      </p>
                    </div>
                  </div>

                  {/* 04 */}
                  <div className="relative flex gap-5">
                    <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-4 border-brand-surface bg-primary text-primary-foreground">
                      <Zap className="size-4" />
                    </div>

                    <div className="pt-1">
                      <p className="text-sm font-semibold text-brand-heading">
                        Better action
                      </p>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        People and care teams have more context for deciding
                        what to do next.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple visual footer */}
              <div className="relative mt-10 flex items-center justify-between border-t border-border pt-6">
                <span className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
                  CONTINUOUS HEALTH DATA
                </span>

                <ArrowUpRight className="size-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}