import {
  Layers3,
  Clock3,
  CircleAlert,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { bpinsights } from "@/data/bpinsights";

const icons = [Layers3, Clock3, CircleAlert];

export function BPInsightsChallenge() {
  const { challenge } = bpinsights;

  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[42%_58%] lg:gap-20">
          {/* Main statement */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {challenge.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
              {challenge.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {challenge.description}
            </p>

            <div className="mt-10 border-l-2 border-primary pl-6">
              <p className="text-xl font-medium leading-relaxed text-brand-heading lg:text-2xl">
                {challenge.closing}
              </p>
            </div>
          </div>

          {/* Connected challenges */}
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden
              className="absolute bottom-8 left-6 top-8 w-px bg-border"
            />

            <div className="space-y-5">
              {challenge.items.map((item, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={item.title}
                    className="relative flex gap-5 pl-0"
                  >
                    {/* Marker */}
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background text-primary shadow-sm">
                      <Icon className="size-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 rounded-[2rem] border border-border bg-background p-6 lg:p-7">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-xs font-bold tracking-[0.2em] text-primary">
                            0{index + 1}
                          </p>

                          <h3 className="mt-2 text-xl font-semibold tracking-tight text-brand-heading lg:text-2xl">
                            {item.title}
                          </h3>
                        </div>

                        <ArrowRight className="mt-1 size-5 shrink-0 text-primary/40" />
                      </div>

                      <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}