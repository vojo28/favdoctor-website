import Link from "next/link";

import { whatWeBuild } from "@/data/homepage";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

import { BuildCard } from "./build-card";

export function WhatWeBuild() {
  

  return (
<section className="pt-20 pb-12 lg:pt-24 lg:pb-16">      <Container>
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

      </Container>
    </section>
  );
}