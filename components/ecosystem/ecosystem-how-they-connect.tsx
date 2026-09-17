import { Container } from "@/components/layout/container";
import { ecosystem } from "@/data/ecosystem";

export function EcosystemHowTheyConnect() {
  const { howTheyConnect } = ecosystem;

  return (
    <section className="border-b border-border/60 bg-brand-surface">
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-primary">
                {howTheyConnect.eyebrow}
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                {howTheyConnect.title}
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {howTheyConnect.description}
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-border/70">
            {howTheyConnect.stages.map((stage) => (
              <article
                key={stage.number}
                className="grid gap-5 border-b border-border/70 py-8 lg:grid-cols-[90px_0.8fr_1.2fr] lg:items-start lg:gap-10"
              >
                <span className="text-sm font-semibold tracking-[0.12em] text-primary">
                  {stage.number}
                </span>

                <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-heading sm:text-2xl">
                  {stage.title}
                </h3>

                <p className="max-w-xl text-base leading-7 text-muted-foreground">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}