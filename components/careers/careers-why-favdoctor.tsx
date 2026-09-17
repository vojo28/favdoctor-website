import { Container } from "@/components/layout/container";
import { careers } from "@/data/careers";

export function CareersWhyFavDoctor() {
  const { whyFavDoctor } = careers;

  return (
    <section className="border-b border-border/60 bg-brand-surface">
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-primary">
                {whyFavDoctor.eyebrow}
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                {whyFavDoctor.title}
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {whyFavDoctor.description}
              </p>
            </div>
          </div>

          <div className="mt-14 grid border-t border-border/70 sm:grid-cols-2 lg:grid-cols-4">
            {whyFavDoctor.points.map((point, index) => (
              <article
                key={point.title}
                className={[
                  "py-8",
                  index < 3 ? "lg:border-r lg:border-border/70 lg:pr-8" : "",
                  index % 2 === 0
                    ? "sm:border-r sm:border-border/70 sm:pr-8"
                    : "sm:pl-8",
                  index >= 2 ? "lg:pl-8" : "",
                ].join(" ")}
              >
                <span className="text-sm font-semibold text-primary">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-brand-heading">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}