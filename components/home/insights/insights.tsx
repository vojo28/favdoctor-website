import { Container } from "@/components/layout/container";

import { ResearchCard } from "./research-card";
import { StoriesCard } from "./stories-card";

export function Insights() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-8 xl:grid-cols-2 items-stretch">
          <ResearchCard />
          <StoriesCard />
        </div>
      </Container>
    </section>
  );
}