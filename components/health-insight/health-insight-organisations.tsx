import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  HeartPulse,
  LineChart,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { healthInsight } from "@/data/health-insight";

const capabilities = [
  {
    title: "Prevention",
    description:
      "Create more opportunities for people to understand their health and act earlier.",
    icon: HeartPulse,
  },
  {
    title: "Health Engagement",
    description:
      "Keep health visible through practical programmes that people can participate in.",
    icon: UsersRound,
  },
  {
    title: "Care Coordination",
    description:
      "Help connect people with appropriate healthcare pathways when additional support is needed.",
    icon: Activity,
  },
  {
    title: "Population Insight",
    description:
      "Understand broader health needs and patterns across the population you serve.",
    icon: LineChart,
  },
];

export function HealthInsightOrganisations() {
  const { organisations } = healthInsight.solutions;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="py-20 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              HEALTH INSIGHT ORGANISATIONS
            </p>

            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {organisations.title}
            </h2>
          </div>

          {/* Invisible content frame */}
          <div className="flex justify-start lg:justify-end">
            <div className="w-full max-w-xl lg:ml-auto">
              <p className="text-xl font-semibold leading-8 tracking-tight text-brand-heading sm:text-2xl lg:text-3xl lg:leading-10">
                {organisations.description}
              </p>

              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                {organisations.question}
              </p>
            </div>
          </div>
        </div>

        {/* Main visual */}
        <div className="mt-14 lg:mt-20">
          <div className="relative min-h-[440px] overflow-hidden rounded-[2.5rem] bg-background lg:min-h-[560px]">
            <Image
              src="/images/health-insight/Organisations.webp"
              alt="Employees participating in a workplace health programme"
              fill
              sizes="(max-width: 1024px) 100vw, 100vw"
              className="object-cover"
            />

            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"
            />

            <div className="absolute bottom-7 left-7 right-7 lg:bottom-10 lg:left-10 lg:right-10">
              <div className="flex items-end justify-between gap-8">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
                      <BrainCircuit className="size-5 text-white" />
                    </div>

                    <p className="text-xs font-bold tracking-[0.18em] text-white/75">
                      POPULATION HEALTH
                    </p>
                  </div>

                  <p className="mt-4 text-2xl font-semibold leading-8 text-white sm:text-3xl">
                    See beyond individual interactions to understand what your
                    population needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programme */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-lg font-medium leading-8 text-brand-heading">
              {organisations.body}
            </p>

            <Button
              asChild
              size="lg"
              className="mt-7 h-12 rounded-full px-6"
            >
              <Link href={organisations.cta.href}>
                {organisations.cta.label}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          {/* Capabilities */}
          <div className="divide-y divide-border border-y border-border">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="grid gap-4 py-6 sm:grid-cols-[auto_1fr] sm:gap-6"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
                    <Icon className="size-5" />
                  </div>

                  <div className="grid gap-1 sm:grid-cols-[0.7fr_1.3fr] sm:gap-8">
                    <h3 className="font-semibold text-brand-heading">
                      {capability.title}
                    </h3>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}