import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { healthInsight } from "@/data/health-insight";

const communityFeatures = [
  {
    title: "Preventive Health",
    description:
      "Create accessible opportunities for residents to understand and take better care of their health.",
    icon: HeartPulse,
  },
  {
    title: "Health Education",
    description:
      "Bring practical health information and education into the community.",
    icon: UsersRound,
  },
  {
    title: "Wellbeing Support",
    description:
      "Create ongoing opportunities that support healthier lifestyles and everyday wellbeing.",
    icon: Activity,
  },
  {
    title: "Care Pathways",
    description:
      "Help residents connect to appropriate healthcare services when additional care is needed.",
    icon: ShieldCheck,
  },
];

export function HealthInsightCommunities() {
  const { communities } = healthInsight.solutions;

  return (
    <section className="relative overflow-hidden bg-background">
      <Container className="py-20 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              HEALTH INSIGHT COMMUNITIES
            </p>

            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {communities.title}
            </h2>
          </div>

          {/* Invisible content frame */}
          <div className="flex justify-start lg:justify-end">
            <div className="w-full max-w-xl lg:ml-auto">
              <p className="text-xl font-semibold leading-8 tracking-tight text-brand-heading sm:text-2xl lg:text-3xl lg:leading-10">
                {communities.description}
              </p>
            </div>
          </div>
        </div>

        {/* Main composition */}
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Community image */}
          <div className="relative min-h-[480px] overflow-hidden rounded-[2.5rem] bg-brand-surface lg:min-h-[620px]">
            <Image
              src="/images/health-insight/communities.webp"
              alt="Residents participating in a community health programme"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />

            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
            />

            <div className="absolute bottom-7 left-7 right-7 lg:bottom-9 lg:left-9 lg:right-9">
              <div className="max-w-md">
                <p className="text-xs font-bold tracking-[0.18em] text-white/75">
                  WHERE PEOPLE LIVE
                </p>

                <p className="mt-3 text-xl font-semibold leading-8 text-white sm:text-2xl">
                  Build health into the community, not just around it.
                </p>
              </div>
            </div>
          </div>

          {/* Community programme */}
          <div className="flex flex-col rounded-[2.5rem] bg-brand-surface p-7 sm:p-9 lg:p-10">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-primary">
                HEALTH IN THE COMMUNITY
              </p>

              <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-brand-heading sm:text-3xl">
                Healthier communities need more than physical infrastructure.
              </h3>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {communities.body}
              </p>
            </div>

            {/* Features */}
            <div className="mt-9 divide-y divide-border border-y border-border">
              {communityFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="grid gap-4 py-5 sm:grid-cols-[auto_1fr] sm:gap-6"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
                      <Icon className="size-5" />
                    </div>

                    <div className="grid gap-1 sm:grid-cols-[0.75fr_1.25fr] sm:gap-8">
                      <h4 className="font-semibold text-brand-heading">
                        {feature.title}
                      </h4>

                      <p className="text-sm leading-7 text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-9">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-6"
              >
                <Link href={communities.cta.href}>
                  {communities.cta.label}
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