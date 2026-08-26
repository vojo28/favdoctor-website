import Link from "next/link";

import { ecosystem } from "@/data/homepage";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

import { EcosystemCard } from "./ecosystem-card";

export function Ecosystem() {
 

  return (
    <section 
      id="ecosystem"
    className="pt-12 pb-20 lg:pt-16 lg:pb-16">
      <Container>
        <SectionHeading
          eyebrow={ecosystem.eyebrow}
          title={ecosystem.title}
          description={ecosystem.description}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {ecosystem.items.map((item) => (
            <EcosystemCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button asChild size="xl">
            <Link href={ecosystem.cta.href}>
              {ecosystem.cta.label}
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}