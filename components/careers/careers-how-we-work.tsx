import { Container } from "@/components/layout/container";
import { careers } from "@/data/careers";

export function CareersHowWeWork() {
  const { howWeWork } = careers;

  return (
    <section className="border-b border-border/60 bg-brand-surface">
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-primary">
                {howWeWork.eyebrow}
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                {howWeWork.title}
              </h2>
            </div>
          </div>

          <div className="mt-14 border-t border-border/70">
            {howWeWork.principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-5 border-b border-border/70 py-8 lg:grid-cols-[100px_0.8fr_1.2fr] lg:items-start lg:gap-10"
              >
                <span className="text-sm font-semibold tracking-[0.12em] text-primary">
                  {principle.number}
                </span>

                <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-heading sm:text-2xl">
                  {principle.title}
                </h3>

                <p className="max-w-xl text-base leading-7 text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}