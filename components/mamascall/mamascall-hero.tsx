import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { mamascall } from "@/data/mamascall";

export function MamaCallHero() {
  const { hero } = mamascall;

  return (
    <section className="relative overflow-hidden">
      <Container className="relative pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[52%_48%] lg:gap-8">
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
                </Link>
              </Button>
            </div>

            {/* Toll-free line */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Mama&apos;s Call Toll-Free Line
                </p>

                <a
                  href="tel:08000000911"
                  className="mt-1 block text-xl font-semibold tracking-tight text-brand-heading transition-colors hover:text-primary"
                >
                  0800-0000-911
                </a>
              </div>
            </div>
          </div>

        {/* Hero visual */}
<div className="relative -mr-8 h-[460px] sm:h-[520px] lg:-mr-20 lg:h-[650px]">
  <div
    aria-hidden
    className="absolute inset-0 -z-10 bg-primary/5 blur-3xl"
  />

  <Image
    src={hero.image.src}
    alt={hero.image.alt}
    fill
    priority
    quality={85}
    sizes="(max-width: 1024px) 100vw, 55vw"
    className="object-cover object-[72%_center]"
    style={{
      maskImage:
        "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 12%, black 30%, black 100%)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 12%, black 30%, black 100%)",
    }}
  />
</div>
        </div>
      </Container>
    </section>
  );
}