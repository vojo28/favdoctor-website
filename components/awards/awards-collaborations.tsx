import { Container } from "@/components/layout/container";
import { awards } from "@/data/awards";

export function AwardsCollaborations() {
  const { collaborations } = awards;

  return (
    <section className="border-b border-border/60 bg-brand-surface">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20 lg:py-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {collaborations.eyebrow}
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {collaborations.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {collaborations.description}
            </p>

            <div className="mt-10 border-t border-border/70">
              {collaborations.organisations.map((organisation) => (
                <div
                  key={organisation}
                  className="border-b border-border/70 py-5"
                >
                  <p className="text-lg font-semibold text-brand-heading">
                    {organisation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}