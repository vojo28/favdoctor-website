import { impactAreas } from "@/data/homepage";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

import { ImpactCard } from "./impact-card";

export function ImpactAreas() {

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow={impactAreas.eyebrow}
          title={impactAreas.title}
          description={impactAreas.description}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {impactAreas.items.map((item) => (
            <ImpactCard
              key={item.title}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}