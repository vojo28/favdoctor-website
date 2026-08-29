import {
  Phone,
  Users,
  Hospital,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { mamascall } from "@/data/mamascall";

const icons = [Users, HeartHandshake, Hospital];

export function MamaCallReach() {
  const { reach } = mamascall;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="py-20 lg:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {reach.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {reach.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {reach.description}
          </p>
        </div>

        {/* Phone connection visual */}
        <div className="relative mx-auto mt-16 max-w-5xl lg:mt-20">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-border bg-background px-6 py-12 sm:px-10 lg:min-h-[500px]">
            {/* Ambient background */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-3xl"
            />

            {/* Central phone */}
            <div className="absolute left-1/2 top-1/2 z-20 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-primary/20 bg-primary text-primary-foreground shadow-xl lg:size-32">
              <Phone className="size-11 lg:size-14" />
            </div>

            {/* Central label */}
            <div className="absolute left-1/2 top-[calc(50%+5.5rem)] z-20 -translate-x-1/2 whitespace-nowrap text-center lg:top-[calc(50%+6.5rem)]">
              <p className="text-xs font-bold tracking-[0.18em] text-primary">
                ONE PHONE
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                A starting point for support
              </p>
            </div>

            {/* Connection lines - desktop */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 hidden h-px w-[68%] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] bg-border lg:block"
            />

            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 hidden h-px w-[68%] -translate-x-1/2 -translate-y-1/2 -rotate-[30deg] bg-border lg:block"
            />

            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 hidden h-[68%] w-px -translate-x-1/2 -translate-y-1/2 bg-border lg:block"
            />

            {/* Connection points */}
            <div className="relative z-10 grid gap-5 pt-40 sm:grid-cols-2 lg:grid-cols-4 lg:pt-0">
              <ConnectionPoint
                className="lg:absolute lg:left-4 lg:top-8"
                title="Mother"
                description="A concern arises"
              />

              <ConnectionPoint
                className="lg:absolute lg:right-4 lg:top-8"
                title="Family"
                description="Someone reaches out"
              />

              <ConnectionPoint
                className="lg:absolute lg:bottom-8 lg:left-4"
                title="Community"
                description="Support can be shared"
              />

              <ConnectionPoint
                className="lg:absolute lg:bottom-8 lg:right-4"
                title="Healthcare"
                description="A clearer path to care"
              />
            </div>
          </div>
        </div>

        {/* Core statement */}
        <div className="mx-auto mt-12 max-w-4xl text-center lg:mt-16">
          <p className="text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
            {reach.statement}
          </p>
        </div>

        {/* Supporting points */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:mt-20">
          {reach.points.map((point, index) => {
            const Icon = icons[index];

            return (
              <div
                key={point.title}
                className="group relative rounded-[2rem] border border-border bg-background p-7 lg:p-8"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-brand-heading">
                  {point.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {point.description}
                </p>

                <ArrowUpRight className="absolute right-7 top-7 size-5 text-primary/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

interface ConnectionPointProps {
  title: string;
  description: string;
  className?: string;
}

function ConnectionPoint({
  title,
  description,
  className,
}: ConnectionPointProps) {
  return (
    <div
      className={[
        "relative w-full rounded-2xl border border-border bg-background/90 p-5 shadow-sm backdrop-blur",
        "lg:w-52",
        className,
      ].join(" ")}
    >
      <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <HeartHandshake className="size-4" />
      </div>

      <h3 className="mt-4 font-semibold text-brand-heading">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}