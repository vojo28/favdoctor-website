import {
  BellRing,
  Database,
  MessageSquare,
  MonitorCheck,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { research } from "@/data/research";

const icons = [
  UsersRound,
  Database,
  MonitorCheck,
  MessageSquare,
  BellRing,
];

export function ResearchTechnology() {
  const { technology } = research;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {technology.eyebrow}
            </p>

            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {technology.title}
            </h2>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="w-full max-w-xl">
              <p className="text-xl font-semibold leading-8 tracking-tight text-brand-heading sm:text-2xl lg:text-3xl lg:leading-10">
                {technology.description}
              </p>

              <p className="mt-5 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {technology.body}
              </p>
            </div>
          </div>
        </div>

        {/* System visual */}
        <div className="mt-16 lg:mt-20">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Main system panel */}
            <div className="relative min-h-[460px] overflow-hidden rounded-[2.5rem] bg-brand-heading p-8 text-white sm:p-10 lg:p-14">
              <div
                aria-hidden
                className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-primary/20 blur-3xl"
              />

              <div
                aria-hidden
                className="absolute -bottom-40 -left-20 size-[24rem] rounded-full bg-white/5 blur-3xl"
              />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                    <Database
                      className="size-7 text-white"
                      strokeWidth={1.6}
                    />
                  </div>

                  <p className="mt-10 text-xs font-bold tracking-[0.2em] text-white/55">
                    RESEARCH IMPLEMENTATION SYSTEM
                  </p>

                  <h3 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    One connected layer across the research journey.
                  </h3>
                </div>

                {/* System flow */}
                <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    "Engage",
                    "Collect",
                    "Track",
                    "Report",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="relative rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <span className="text-[10px] font-bold tracking-[0.16em] text-white/40">
                        0{index + 1}
                      </span>

                      <p className="mt-2 text-sm font-semibold text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Supporting message */}
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-border bg-background p-8 sm:p-10 lg:p-12">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-primary">
                  BUILT FOR THE FIELD
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-brand-heading">
                  Practical technology. Human implementation.
                </h3>

                <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                  Digital systems are most useful when they fit the realities
                  of participants, field teams, facilities, and researchers.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MonitorCheck className="size-6" strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-brand-heading">
                    Designed around implementation
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Not technology for technology's sake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-14 border-t border-border lg:mt-16">
          {technology.capabilities.map((capability, index) => {
            const Icon = icons[index];

            return (
              <div
                key={capability.title}
                className="grid gap-5 border-b border-border py-7 sm:grid-cols-[60px_0.8fr_1.2fr] sm:items-center sm:gap-8"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-background text-primary">
                  <Icon className="size-5" strokeWidth={1.7} />
                </div>

                <div>
                  <span className="text-xs font-bold tracking-[0.18em] text-primary/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h4 className="mt-1 text-lg font-semibold tracking-tight text-brand-heading">
                    {capability.title}
                  </h4>
                </div>

                <p className="text-base leading-7 text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}