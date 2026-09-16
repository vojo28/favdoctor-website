import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { healthInsight } from "@/data/health-insight";

export function HealthInsightHero() {
  const { hero } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 size-[32rem] rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-12rem] top-[-8rem] size-[34rem] rounded-full bg-primary/5 blur-3xl"
      />

      <Container className="relative">
        <div className="grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6 lg:py-24">
          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="size-4" />
              {hero.eyebrow}
            </div>

            <h1 className="mt-7 text-balance text-5xl font-bold tracking-[-0.04em] text-brand-heading sm:text-6xl lg:text-7xl xl:text-[5.25rem] xl:leading-[1.02]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-full px-7 text-base"
              >
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-border px-7 text-base"
              >
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex max-w-xl items-start gap-4 border-l-2 border-primary/30 pl-5">
              <div className="mt-1 size-2 shrink-0 rounded-full bg-primary" />

              <p className="text-sm leading-7 text-muted-foreground">
                {hero.positioning}
              </p>
            </div>
          </div>

          {/* Visual */}
<div className="relative min-h-[420px] lg:min-h-[600px]">
  <div
    aria-hidden
    className="absolute right-0 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
  />

  <div className="absolute inset-y-0 right-[-8%] w-[115%] lg:right-[-10%] lg:w-[118%]">
    <Image
      src={hero.image.src}
      alt={hero.image.alt}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 65vw"
      className="object-cover object-[72%_center]"
    />

    <div
      aria-hidden
      className="absolute inset-0 bg-gradient-to-r from-background via-background/25 to-transparent"
    />

    <div
      aria-hidden
      className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/10"
    />
  </div>

  <div className="absolute bottom-6 left-4 z-10 hidden max-w-[250px] rounded-3xl border border-white/60 bg-white/85 p-5 shadow-xl shadow-black/5 backdrop-blur-md sm:block lg:bottom-14 lg:left-0">
    <p className="text-[11px] font-bold tracking-[0.18em] text-primary">
      THE HEALTH INSIGHT APPROACH
    </p>

    <p className="mt-3 text-lg font-semibold leading-7 text-brand-heading">
      Bring health closer. Understand needs. Support action.
    </p>
  </div>
</div>
        </div>
      </Container>
    </section>
  );
}