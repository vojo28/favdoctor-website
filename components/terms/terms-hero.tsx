import { Container } from "@/components/layout/container";
import { terms } from "@/data/terms";

export function TermsHero() {
  const { hero } = terms;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container>
        <div className="flex min-h-[420px] items-center py-16 lg:min-h-[480px] lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-balance text-5xl font-bold tracking-[-0.045em] text-brand-heading sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {hero.description}
            </p>

            <p className="mt-6 text-sm font-medium text-muted-foreground">
              Last updated: {hero.lastUpdated}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}