import { Container } from "@/components/layout/container";

import { ResearchCard } from "./research-card";
import { StoriesCard } from "./stories-card";

export function Insights() {
  return (
    <section className="pt-12 pb-20 lg:pt-16 lg:pb-24">
      <Container>
        <div className="space-y-8">
          <ResearchCard />
          <StoriesCard />
        </div>
      </Container>
    </section>
  );
}