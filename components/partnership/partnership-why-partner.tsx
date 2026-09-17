import { Container } from "@/components/layout/container";
import { partnership } from "@/data/partnership";

export function PartnershipWhyPartner() {
  const { whyPartner } = partnership;

  return (
    <section className="border-b border-border/60 bg-brand-surface">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20 lg:py-20">
          {/* Section label */}
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {whyPartner.eyebrow}
            </p>
          </div>

          {/* Content */}
          <div>
            <h2 className="max-w-4xl text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {whyPartner.title}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {whyPartner.description}
            </p>

            <div className="mt-9 border-l-2 border-primary pl-5">
              <p className="max-w-2xl text-lg font-semibold leading-8 text-brand-heading sm:text-xl">
                {whyPartner.statement}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}