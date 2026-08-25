import { Container } from "@/components/layout/container";

import { ResearchCard } from "./research-card";
import { StoriesCard } from "./stories-card";

export function Insights() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="space-y-8">
          <ResearchCard />
          <StoriesCard />
        </div>
      </Container>
    </section>
  );
}