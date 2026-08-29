import {
  MapPin,
  CircleHelp,
  Clock3,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { mamascall } from "@/data/mamascall";

const icons = [MapPin, CircleHelp, Clock3];

export function MamaCallAccess() {
  const { access } = mamascall;

  return (
    <section className="relative overflow-hidden">
      <Container className="py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[42%_58%] lg:items-start">
          {/* Main story */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {access.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
              {access.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {access.description}
            </p>

            <div className="mt-10 border-l-2 border-primary pl-6">
              <p className="text-xl font-medium leading-relaxed text-brand-heading">
                {access.closing}
              </p>
            </div>
          </div>

          {/* Visual pathway */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute bottom-12 left-6 top-12 hidden w-px bg-border sm:block"
            />

            <div className="space-y-5">
              {access.points.map((point, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={point.title}
                    className="relative flex gap-5 rounded-[2rem] border border-border bg-background p-6 transition-transform duration-300 hover:-translate-y-1 lg:p-8"
                  >
                    {/* Icon */}
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                          0{index + 1}
                        </span>

                        {index < access.points.length - 1 && (
                          <ArrowRight className="hidden size-4 text-primary/40 sm:block" />
                        )}
                      </div>

                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-brand-heading">
                        {point.title}
                      </h3>

                      <p className="mt-3 leading-7 text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connection point */}
            <div className="relative mt-6 overflow-hidden rounded-[2rem] bg-primary px-7 py-8 text-white lg:px-8">
              {/* Background decoration */}
              <div
                aria-hidden
                className="absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl"
              />

              <div
                aria-hidden
                className="absolute -bottom-16 left-1/3 size-40 rounded-full bg-white/[0.06] blur-3xl"
              />

              <div className="relative flex items-start gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/15">
                  <PhoneCall className="size-7 text-white" />
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-[0.15em] text-white/75">
                    A SIMPLE START
                  </p>

                  <p className="mt-3 text-xl font-semibold leading-relaxed text-white lg:text-2xl">
                    Sometimes, reaching for a phone can be the first step
                    toward reaching the right care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}