import Image from "next/image";
import Link from "next/link";

import { partnerCTA } from "@/data/homepage";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function PartnerCTA() {
  

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <Image
          src={partnerCTA.image.src}
          alt={partnerCTA.image.alt}
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>

      <Container className="relative py-24 lg:py-32">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {partnerCTA.title}
          </h2>

          <div className="mt-8 space-y-5 text-lg text-primary-foreground/90">
            {partnerCTA.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
            >
              <Link href={partnerCTA.primaryAction.href}>
                {partnerCTA.primaryAction.label}
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
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