import Image from "next/image";
import Link from "next/link";

import { partnerCTA } from "@/data/homepage";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function PartnerCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={partnerCTA.image.src}
          alt={partnerCTA.image.alt}
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 -z-10 bg-primary/80" />

      <Container className="relative py-24 lg:py-32">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-primary-foreground lg:text-5xl">
            {partnerCTA.title}
          </h2>

          <div className="mt-8 space-y-5 text-lg text-primary-foreground/90">
            {partnerCTA.description.map((paragraph) => (
              <p
                key={paragraph}
                className="text-primary-foreground/90"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href={partnerCTA.primaryAction.href}>
                {partnerCTA.primaryAction.label}
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href={partnerCTA.secondaryAction.href}>
                {partnerCTA.secondaryAction.label}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}