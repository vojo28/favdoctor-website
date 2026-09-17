import { Container } from "@/components/layout/container";
import { partnership } from "@/data/partnership";

export function PartnershipHowWeWork() {
  const { howWeWork } = partnership;

  return (
    <section className="border-b border-border/60 bg-brand-surface">
      <Container>
        <div className="py-16 lg:py-20">
          {/* Intro */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {howWeWork.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {howWeWork.title}
            </h2>
          </div>

          {/* Process */}
          <div className="mt-14 grid border-t border-border/70 md:grid-cols-2 lg:grid-cols-3">
            {howWeWork.steps.map((step) => (
              <div
                key={step.number}
                className="group border-b border-border/70 py-8 md:px-8 lg:min-h-[230px] lg:py-9"
              >
                <span className="text-sm font-semibold tabular-nums text-primary">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-brand-heading transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-sm text-base leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}