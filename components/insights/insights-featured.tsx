import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { insights } from "@/data/insights";

export function InsightsFeatured() {
  const { featured } = insights;

  return (
    <section className="bg-brand-surface">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="mb-10 flex items-center justify-between gap-6">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            {featured.eyebrow}
          </p>

          <span className="hidden text-xs font-medium tracking-[0.14em] text-muted-foreground sm:block">
            FEATURED
          </span>
        </div>

        <Link
          href={featured.href}
          className="group block overflow-hidden rounded-[2rem] bg-background transition-shadow duration-300 hover:shadow-xl"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Image */}
            <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[560px]">
              <Image
                src={featured.image.src}
                alt={featured.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
              />

              <div className="absolute bottom-6 left-6 rounded-full bg-background/90 px-4 py-2 backdrop-blur-sm">
                <span className="text-xs font-semibold tracking-[0.12em] text-brand-heading">
                  {featured.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">
              <div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{featured.date}</span>
                  <span aria-hidden className="size-1 rounded-full bg-border" />
                  <span>{featured.readTime}</span>
                </div>

                <h2 className="mt-8 text-balance text-3xl font-bold tracking-tight text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                  {featured.title}
                </h2>

                <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                  {featured.description}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
                <span className="text-sm font-semibold text-brand-heading">
                  Read insight
                </span>

                <div className="flex size-11 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}