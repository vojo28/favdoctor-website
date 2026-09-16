import {
  BrainCircuit,
  HeartPulse,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const principles = [
  {
    title: "Human Expertise",
    description:
      "Healthcare professionals remain at the centre of how people are supported and connected to care.",
    icon: UsersRound,
  },
  {
    title: "Connected Information",
    description:
      "Technology helps bring relevant health information together so it can be understood in context.",
    icon: HeartPulse,
  },
  {
    title: "Population Intelligence",
    description:
      "Data can reveal broader patterns and health needs across populations without reducing people to numbers.",
    icon: BrainCircuit,
  },
  {
    title: "Responsible Action",
    description:
      "Insights should create opportunities for earlier, more appropriate action — not replace clinical judgement.",
    icon: ShieldCheck,
  },
];

export function HealthInsightPeople() {
  const { people } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-background">
      <Container className="py-20 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {people.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {people.title}
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <div className="space-y-4 text-lg leading-8 text-muted-foreground">
              {people.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
                className="rounded-[2rem] border border-border bg-brand-surface p-7 lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-background text-primary">
                    <Icon className="size-6" />
                  </div>

                  <span className="text-xs font-bold tracking-[0.18em] text-primary/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-brand-heading">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-14 rounded-[2.5rem] bg-primary p-8 text-white sm:p-10 lg:mt-20 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-white/10">
              <HeartPulse
                className="size-8 text-white"
                strokeWidth={1.5}
              />
            </div>

            <p className="max-w-4xl text-balance text-2xl font-medium leading-relaxed text-white sm:text-3xl lg:text-4xl">
              {people.closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}