import { Container } from "@/components/layout/container";
import { partnership } from "@/data/partnership";

export function PartnershipWhoWePartnerWith() {
  const { whoWePartnerWith } = partnership;

  return (
    <section className="border-b border-border/60 bg-background">
      <Container>
        <div className="py-16 lg:py-20">
          {/* Intro */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {whoWePartnerWith.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {whoWePartnerWith.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {whoWePartnerWith.description}
            </p>
          </div>

          {/* Partner groups */}
          <div className="mt-14 grid border-t border-border/70 md:grid-cols-2">
            {whoWePartnerWith.groups.map((group, index) => (
              <div
                key={group.title}
                className="group border-b border-border/70 py-8 md:px-8 md:py-9 md:even:border-l md:first:pl-0 md:nth-[2]:pr-0 md:nth-[3]:pl-0"
              >
                <div className="flex gap-6">
                  <span className="shrink-0 pt-1 text-sm font-medium tabular-nums text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-heading transition-colors group-hover:text-primary sm:text-2xl">
                      {group.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}