import { Container } from "@/components/layout/container";
import { partnership } from "@/data/partnership";

export function PartnershipWhatWeCouldBuild() {
  const { whatWeCouldBuild } = partnership;

  return (
    <section className="border-b border-border/60 bg-background">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20 lg:py-20">
          {/* Intro */}
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {whatWeCouldBuild.eyebrow}
            </p>

            <h2 className="mt-5 max-w-md text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {whatWeCouldBuild.title}
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {whatWeCouldBuild.description}
            </p>
          </div>

          {/* Possibilities */}
          <div className="border-t border-border/70">
            {whatWeCouldBuild.possibilities.map((possibility, index) => (
              <div
                key={possibility}
                className="group flex items-center justify-between gap-6 border-b border-border/70 py-6 sm:py-7"
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm font-medium tabular-nums text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-brand-heading transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {possibility}
                  </h3>
                </div>

                <span
                  aria-hidden
                  className="text-xl text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}