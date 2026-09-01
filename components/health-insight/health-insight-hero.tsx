import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { healthInsight } from "@/data/health-insight";

export function HealthInsightHero() {
  const { hero } = healthInsight;

  return (
    <section className="relative overflow-hidden">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute -left-40 top-0 size-[32rem] rounded-full bg-primary/10 blur-[140px]"
      />

      <div
        aria-hidden
        className="absolute -right-40 top-20 size-[30rem] rounded-full bg-primary/5 blur-[140px]"
      />

      <Container className="relative pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[52%_48%] lg:gap-0">
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-tight text-brand-heading lg:text-7xl">
              {hero.title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground lg:text-xl">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                  <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>

            {/* Supporting statement */}
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-12 bg-primary/40" />

              <p className="text-sm font-medium text-muted-foreground">
                Reach people. Understand health. Create healthier futures.
              </p>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative lg:-mr-20">
            {/* Main visual background */}
            <div
              aria-hidden
              className="absolute inset-8 rounded-[3rem] bg-primary/10 blur-3xl"
            />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={1000}
                height={1000}
                priority
                quality={90}
                className="h-auto w-full object-cover"
              />

              {/* Subtle bottom gradient */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-heading/20 to-transparent"
              />
            </div>

            {/* Floating insight card */}
            <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-background/95 p-5 shadow-xl backdrop-blur lg:block">
              <p className="text-xs font-bold tracking-[0.18em] text-primary">
                HEALTH INSIGHT
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-brand-heading">
                Every gathering can become an opportunity for better health.
              </p>
            </div>

            {/* Small connection point */}
            <div className="absolute -right-4 top-1/4 hidden size-16 items-center justify-center rounded-full border border-primary/15 bg-background shadow-lg lg:flex">
              <div className="size-5 rounded-full bg-primary/80" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}