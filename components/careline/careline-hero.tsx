import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { careline } from "@/data/careline";

export function CareLineHero() {
  const { hero } = careline;

  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-8 lg:py-0">
        <div className="relative flex min-h-[620px] items-center lg:min-h-[650px]">
          {/* Content */}
          <div className="relative z-20 max-w-xl lg:w-[58%]">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-tight text-brand-heading lg:text-7xl">
              {hero.title}
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-muted-foreground lg:text-xl">
              {hero.description}
            </p>

            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/contact">
                  Let&apos;s build better connections
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Desktop image */}
          <div className="pointer-events-none absolute right-[-5rem] top-1/2 z-10 hidden w-[58%] -translate-y-1/2 lg:block">
            <div className="relative">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={1536}
                height={1024}
                priority
                quality={75}
                className="h-auto w-full object-contain"
              />

              {/* Fade image into the text side */}
              <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-background via-background/75 to-transparent" />

              {/* Soft blur at the blending edge */}
              <div className="absolute inset-y-0 left-[18%] w-32 bg-background/30 blur-3xl" />
            </div>
          </div>
        </div>

        {/* Mobile image */}
        <div className="relative mt-10 lg:hidden">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={1536}
            height={1024}
            priority
            quality={75}
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}