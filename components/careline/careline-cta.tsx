import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { careline } from "@/data/careline";

export function CareLineCTA() {
  const { cta } = careline;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-32">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-heading px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-24">
          {/* Background accents */}
          <div
            aria-hidden
            className="absolute -left-32 -top-32 size-80 rounded-full bg-brand-red/20 blur-[120px]"
          />

          <div
            aria-hidden
            className="absolute -bottom-40 -right-32 size-96 rounded-full bg-brand-blue/20 blur-[140px]"
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-white/60">
              LET&apos;S WORK TOGETHER
            </p>

            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {cta.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70 lg:text-xl">
              {cta.description}
            </p>

            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-heading hover:bg-white/90"
              >
                <Link href={cta.href}>
                  {cta.label}
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}