import Link from "next/link";
import {
  Building2,
  Landmark,
  HeartHandshake,
  Users,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { mamascall } from "@/data/mamascall";

const icons = [
  Building2,
  Landmark,
  HeartHandshake,
  Users,
];

export function MamaCallPartnership() {
  const { partnership } = mamascall;

  return (
    <section className="relative overflow-hidden bg-brand-heading text-white">
      {/* Ambient background */}
      <div
        aria-hidden
        className="absolute -left-40 top-0 size-[32rem] rounded-full bg-primary/20 blur-[140px]"
      />

      <div
        aria-hidden
        className="absolute -bottom-40 right-0 size-[30rem] rounded-full bg-primary/10 blur-[140px]"
      />

      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wider text-white/70">
            {partnership.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white lg:text-6xl">
            {partnership.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            {partnership.description}
          </p>
        </div>

        {/* Partner types */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {partnership.partners.map((partner, index) => {
            const Icon = icons[index];

            return (
              <div
                key={partner.title}
                className="group relative min-h-[240px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.10]"
              >
                {/* Icon */}
                <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Icon className="size-6" />
                </div>

                {/* Arrow */}
                <ArrowUpRight className="absolute right-6 top-6 size-5 text-white/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />

                {/* Title */}
                <h3 className="mt-8 text-xl font-semibold text-white">
                  {partner.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {partner.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
<div className="mt-16 border-t border-white/15 pt-12 lg:mt-24 lg:flex lg:items-center lg:justify-between lg:gap-12">
  <div className="max-w-3xl">
    <p className="text-balance text-2xl font-medium leading-relaxed text-white lg:text-4xl">
      {partnership.closing}
    </p>
  </div>

  <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
    {/* Primary CTA */}
    <Button
      asChild
      size="lg"
      className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-brand-heading shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-md"
    >
      <Link href={partnership.primaryCta.href}>
        {partnership.primaryCta.label}
        <ArrowUpRight className="ml-1 size-4" />
      </Link>
    </Button>

    {/* Secondary CTA */}
    <Button
      asChild
      size="lg"
      variant="outline"
      className="h-12 rounded-full border-white/30 bg-transparent px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 hover:text-white"
    >
      <Link href={partnership.secondaryCta.href}>
        {partnership.secondaryCta.label}
      </Link>
    </Button>
  </div>
</div>
      </Container>
    </section>
  );
}