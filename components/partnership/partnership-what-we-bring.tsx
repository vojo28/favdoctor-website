import { Container } from "@/components/layout/container";
import { partnership } from "@/data/partnership";

export function PartnershipWhatWeBring() {
  const { whatWeBring } = partnership;

  return (
    <section className="border-b border-border/60 bg-background">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20 lg:py-20">
          {/* Section intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {whatWeBring.eyebrow}
            </p>

            <h2 className="mt-5 max-w-md text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {whatWeBring.title}
            </h2>
          </div>

          {/* Capabilities */}
          <div className="border-t border-border/70">
            {whatWeBring.items.map((item, index) => (
              <div
                key={item.title}
                className="group grid gap-5 border-b border-border/70 py-7 sm:grid-cols-[56px_1fr] sm:gap-7 sm:py-8"
              >
                <span className="pt-1 text-sm font-medium tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-heading transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}