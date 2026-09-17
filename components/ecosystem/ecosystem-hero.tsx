import { Container } from "@/components/layout/container";
import { ecosystem } from "@/data/ecosystem";

export function EcosystemHero() {
  const { hero } = ecosystem;

  return (
    <section className="relative overflow-hidden bg-background">
      <Container>
        <div className="flex min-h-[600px] items-center py-20 lg:min-h-[650px] lg:py-24">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {hero.eyebrow}
            </p>

            <h1 className="mt-7 max-w-5xl text-balance text-5xl font-bold tracking-[-0.045em] text-brand-heading sm:text-6xl lg:text-8xl lg:leading-[0.98]">
              {hero.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {hero.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}