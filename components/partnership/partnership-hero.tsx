import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { partnership } from "@/data/partnership";

export function PartnershipHero() {
  const { hero } = partnership;

  return (
    <section className="relative overflow-hidden bg-background">
      <Container className="relative">
        <div className="grid min-h-[600px] items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-16">          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-balance text-5xl font-bold tracking-[-0.035em] text-brand-heading sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={hero.cta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:gap-3 hover:opacity-90"
              >
                {hero.cta.label}

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Visual */}
<div className="relative min-h-[380px] lg:min-h-[520px]">            {/* Ambient glow */}
            <div
              aria-hidden
              className="absolute right-0 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="absolute inset-0 lg:-right-[8%]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-[55%_center]"
              />

              {/* Blend image into page */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-background via-background/15 to-transparent"
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-background/5"
              />
            </div>

            {/* Partnership signal */}
            <div className="absolute bottom-8 left-4 hidden max-w-[280px] lg:block">
              <div className="border-l-2 border-primary pl-5">
                <p className="text-xs font-bold tracking-[0.18em] text-primary">
                  PARTNERSHIPS
                </p>

                <p className="mt-2 text-lg font-semibold leading-7 text-brand-heading">
                  Building stronger solutions together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}