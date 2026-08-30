import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { bpinsights } from "@/data/bpinsights";

export function BPInsightsHero() {
  const { hero } = bpinsights;

  return (
    <section className="relative overflow-hidden">
      <Container className="relative pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[52%_48%] lg:gap-0">
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
                <Link
                  href={hero.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hero.secondaryCta.label}
                  <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative -mr-8 lg:-mr-20">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl"
            />

            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1000}
              height={900}
              priority
              quality={85}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}