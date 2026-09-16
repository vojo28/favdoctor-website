import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { healthInsight } from "@/data/health-insight";

const services = [
  {
    title: "Health Stations",
    icon: Activity,
  },
  {
    title: "Health Assessments",
    icon: HeartPulse,
  },
  {
    title: "Health Education",
    icon: UsersRound,
  },
  {
    title: "Referral & Follow-up",
    icon: Stethoscope,
  },
  {
    title: "Emergency Preparedness",
    icon: ShieldCheck,
  },
];

export function HealthInsightGatherings() {
  const { gatherings } = healthInsight.solutions;

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-background"
    >
      <Container className="py-20 lg:py-28">
{/* Header */}
<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
  <div>
    <p className="text-sm font-semibold tracking-[0.16em] text-primary">
      HEALTH INSIGHT GATHERINGS
    </p>

    <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
      {gatherings.title}
    </h2>
  </div>

  {/* Invisible card / content frame */}
  <div className="flex justify-start lg:justify-end">
    <div className="w-full max-w-xl">
      <div className="lg:ml-auto">
        <p className="text-xl font-semibold leading-8 tracking-tight text-brand-heading sm:text-2xl lg:text-3xl lg:leading-10">
          {gatherings.description}
        </p>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {gatherings.opportunity}
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Main visual + copy */}
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Image */}
          <div className="relative min-h-[440px] overflow-hidden rounded-[2.5rem] bg-brand-surface lg:min-h-[600px]">
            <Image
              src="/images/health-insight/Gatherings.webp"
              alt="Healthcare professionals providing health support at a gathering"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />

            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
            />

            <div className="absolute bottom-7 left-7 right-7 lg:bottom-9 lg:left-9 lg:right-9">
              <div className="max-w-md">
                <p className="text-xs font-bold tracking-[0.18em] text-white/75">
                  HEALTH WHERE PEOPLE ARE
                </p>

                <p className="mt-3 text-xl font-semibold leading-8 text-white sm:text-2xl">
                  Turn a gathering into an opportunity for meaningful health
                  engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col rounded-[2.5rem] bg-brand-surface p-7 sm:p-9 lg:p-10">
            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                {gatherings.body[0]}
              </p>

              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                {gatherings.body[1]}
              </p>
            </div>

            <div className="mt-9 divide-y divide-border">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
                      <Icon className="size-5" />
                    </div>

                    <span className="text-base font-semibold text-brand-heading">
                      {service.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-auto border-t border-border pt-8">
              <p className="text-xl font-semibold leading-8 tracking-tight text-brand-heading">
                {gatherings.closing}
              </p>

              <Button
                asChild
                className="mt-6 h-12 rounded-full px-6"
              >
                <Link href={gatherings.cta.href}>
                  {gatherings.cta.label}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}