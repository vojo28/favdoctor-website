import Link from "next/link";

import { whatWeBuild } from "@/data/homepage";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

import { BuildCard } from "./build-card";

export function WhatWeBuild() {
  

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow={whatWeBuild.eyebrow}
          title={whatWeBuild.title}
          description={whatWeBuild.description}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whatWeBuild.items.map((item) => (
            <BuildCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button asChild size="xl">
            <Link href={whatWeBuild.cta.href}>
              {whatWeBuild.cta.label}
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}