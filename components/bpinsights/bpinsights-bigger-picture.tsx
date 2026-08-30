import {
  HeartPulse,
  Activity,
  Droplets,
  Scale,
  Pill,
  ClipboardList,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { bpinsights } from "@/data/bpinsights";

const icons = [
  HeartPulse,
  Activity,
  Droplets,
  Scale,
  Pill,
  ClipboardList,
  MessageCircle,
];

export function BPInsightsBiggerPicture() {
  const { biggerPicture } = bpinsights;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {biggerPicture.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {biggerPicture.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {biggerPicture.description}
          </p>
        </div>

        {/* Connected cardiovascular picture */}
        <div className="mt-16 lg:mt-24">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-background p-6 sm:p-8 lg:p-12">
            {/* Background atmosphere */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-3xl"
            />

            {/* Desktop connecting lines */}
            <div
              aria-hidden
              className="absolute left-1/2 top-[34%] hidden h-px w-[68%] -translate-x-1/2 bg-border lg:block"
            />

            <div
              aria-hidden
              className="absolute left-1/2 top-[66%] hidden h-px w-[68%] -translate-x-1/2 bg-border lg:block"
            />

            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 hidden h-[68%] w-px -translate-x-1/2 -translate-y-1/2 bg-border lg:block"
            />

            <div className="relative">
              {/* Top row */}
              <div className="grid gap-4 lg:grid-cols-3">
                {biggerPicture.signals.slice(0, 3).map((signal, index) => {
                  const Icon = icons[index];

                  return (
                    <div
                      key={signal.title}
                      className="relative rounded-[1.75rem] border border-border bg-brand-surface p-6 lg:p-7"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>

                        <span className="text-xs font-bold tracking-[0.2em] text-primary/50">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-semibold tracking-tight text-brand-heading">
                        {signal.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {signal.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Center */}
              <div className="my-8 flex justify-center lg:my-12">
                <div className="relative flex size-40 items-center justify-center rounded-full border border-primary/20 bg-primary/10 p-4 text-center shadow-sm">
                  <div className="absolute inset-3 rounded-full border border-primary/10" />

                  <div className="relative">
                    <HeartPulse className="mx-auto size-9 text-primary" />

                    <p className="mt-3 text-sm font-bold leading-tight text-brand-heading">
                      Cardiovascular
                      <br />
                      Health
                    </p>

                    <p className="mt-1 text-[10px] font-medium tracking-[0.16em] text-muted-foreground">
                      CONNECTED PICTURE
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid gap-4 lg:grid-cols-4">
                {biggerPicture.signals.slice(3).map((signal, index) => {
                  const actualIndex = index + 3;
                  const Icon = icons[actualIndex];

                  return (
                    <div
                      key={signal.title}
                      className="relative rounded-[1.75rem] border border-border bg-brand-surface p-6 lg:p-7"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>

                        <span className="text-xs font-bold tracking-[0.2em] text-primary/50">
                          0{actualIndex + 1}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-semibold tracking-tight text-brand-heading">
                        {signal.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {signal.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-6 border-l-2 border-primary pl-6 lg:mt-16 lg:flex-row lg:items-center lg:justify-between lg:pl-8">
          <p className="max-w-4xl text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
            {biggerPicture.closing}
          </p>

          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <ArrowRight className="size-6" />
          </div>
        </div>
      </Container>
    </section>
  );
}