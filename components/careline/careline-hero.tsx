import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { careline } from "@/data/careline";

export function CareLineHero() {
  const { hero } = careline;

  return (
    <section
      aria-labelledby="careline-heading"
      className="relative overflow-hidden bg-gradient-to-br from-white via-brand-surface to-brand-surface-alt"
    >
      <Container className="relative py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {hero.eyebrow}
          </p>

          <h1
            id="careline-heading"
            className="mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-tight text-brand-heading lg:text-7xl"
          >
            {hero.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground lg:text-xl">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
                <ArrowDown className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Subtle background accents */}
        <div
          aria-hidden
          className="absolute right-[-12rem] top-20 h-[30rem] w-[30rem] rounded-full bg-brand-blue/10 blur-[140px]"
        />

        <div
          aria-hidden
          className="absolute bottom-[-10rem] left-[-10rem] h-[24rem] w-[24rem] rounded-full bg-brand-red/5 blur-[120px]"
        />
      </Container>
    </section>
  );
}