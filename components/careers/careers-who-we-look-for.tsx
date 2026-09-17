import { Container } from "@/components/layout/container";
import { careers } from "@/data/careers";

export function CareersWhoWeLookFor() {
  const { whoWeLookFor } = careers;

  return (
    <section className="border-b border-border/60 bg-background">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20 lg:py-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {whoWeLookFor.eyebrow}
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {whoWeLookFor.title}
            </h2>

            <p className="mt-7 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {whoWeLookFor.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
              {whoWeLookFor.disciplines.map((discipline) => (
                <span
                  key={discipline}
                  className="rounded-full border border-border bg-brand-surface px-4 py-2 text-sm font-medium text-brand-heading"
                >
                  {discipline}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}