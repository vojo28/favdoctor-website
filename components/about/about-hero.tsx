import { Container } from "@/components/layout/container";
import { about } from "@/data/about";

export function AboutHero() {
  const { hero } = about;

  return (
    <section className="relative overflow-hidden bg-background">
      <Container>
        <div className="flex min-h-[560px] items-center py-16 lg:min-h-[600px] lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-balance text-5xl font-bold tracking-[-0.035em] text-brand-heading sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {hero.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}