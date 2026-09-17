import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { Container } from "@/components/layout/container";
import { about } from "@/data/about";

export function AboutPresence() {
  const { presence } = about;

  return (
    <section className="border-b border-border/60 bg-brand-surface">
      <Container>
        <div className="py-16 lg:py-20">
          {/* Intro */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {presence.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {presence.title}
            </h2>
          </div>

          {/* Content */}
          <div className="mt-12 grid border-t border-border/70 lg:grid-cols-2">
            {/* Location */}
            <div className="border-b border-border/70 py-8 lg:border-b-0 lg:border-r lg:py-10 lg:pr-12">
              <div className="flex items-center gap-3 text-primary">
                <MapPin className="size-5" aria-hidden="true" />

                <span className="text-sm font-semibold tracking-[0.12em]">
                  LOCATION
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-[-0.025em] text-brand-heading sm:text-3xl">
                {presence.location.city}, {presence.location.country}
              </h3>

              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                {presence.location.description}
              </p>
            </div>

            {/* Recognition */}
            <div className="py-8 lg:py-10 lg:pl-12">
              <p className="text-sm font-semibold tracking-[0.12em] text-primary">
                RECOGNITION
              </p>

              <h3 className="mt-5 text-2xl font-bold tracking-[-0.025em] text-brand-heading sm:text-3xl">
                {presence.recognition.title}
              </h3>

              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                {presence.recognition.description}
              </p>

              <Link
                href={presence.recognition.href}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-heading transition-colors hover:text-primary"
              >
                {presence.recognition.linkLabel}

                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}