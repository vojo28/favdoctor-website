import { Container } from "@/components/layout/container";
import { ecosystem } from "@/data/ecosystem";

export function EcosystemEvolve() {
  const { evolve } = ecosystem;

  return (
    <section className="border-b border-border/60 bg-background">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20 lg:py-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {evolve.eyebrow}
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {evolve.title}
            </h2>

            <p className="mt-7 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {evolve.description}
            </p>

            <div className="mt-8 border-l-2 border-primary pl-6">
              <p className="text-lg font-semibold leading-8 text-brand-heading sm:text-xl sm:leading-9">
                {evolve.statement}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}