import { ArrowDownRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

export function HealthInsightNigeriaChallenge() {
  const { nigeriaChallenge } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Section introduction */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {nigeriaChallenge.eyebrow}
            </p>

            <h2 className="mt-5 max-w-xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {nigeriaChallenge.title}
            </h2>
          </div>

          <div className="flex items-end justify-start lg:justify-end">
            <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
              <ArrowDownRight className="size-5 text-primary" />
              <span>Every year represents a life.</span>
            </div>
          </div>
        </div>

        {/* Life expectancy data */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-border bg-background lg:mt-20">
          <div className="grid grid-cols-[1fr_auto] border-b border-border px-6 py-4 text-xs font-bold tracking-[0.16em] text-muted-foreground sm:px-8">
            <span>COUNTRY</span>
            <span>LIFE EXPECTANCY</span>
          </div>

          <div className="divide-y divide-border">
            {nigeriaChallenge.lifeExpectancy.map((item) => {
              const isNigeria = item.country === "Nigeria";
              const isWorld = item.country === "World";

              return (
                <div
                  key={item.country}
                  className={`grid grid-cols-[1fr_auto] items-center px-6 py-5 transition-colors sm:px-8 ${
                    isNigeria ? "bg-primary/[0.06]" : "hover:bg-muted/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isNigeria && (
                      <span
                        aria-hidden="true"
                        className="size-2 shrink-0 rounded-full bg-primary"
                      />
                    )}

                    {/* Flag / Globe */}
                    {isWorld ? (
                      <div className="size-8 shrink-0 overflow-hidden rounded-full">
                        <img
                          src="/images/flags/globe.svg"
                          alt="World"
                          className="size-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-7 w-10 shrink-0 overflow-hidden rounded-[3px] border border-border bg-background shadow-sm">
                        {item.flag && (
                          <img
                            src={item.flag}
                            alt={`${item.country} flag`}
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                    )}

                    <span
                      className={`text-base ${
                        isNigeria
                          ? "font-semibold text-brand-heading"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.country}
                    </span>
                  </div>

                  <span
                    className={`text-lg font-semibold tabular-nums sm:text-xl ${
                      isNigeria ? "text-primary" : "text-brand-heading"
                    }`}
                  >
                    {item.years}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Source */}
          <div className="border-t border-border px-6 py-4 sm:px-8">
            <p className="text-xs leading-6 text-muted-foreground">
              {nigeriaChallenge.source}
            </p>
          </div>
        </div>

  {/* Human story */}
<div className="mx-auto mt-10 max-w-3xl text-center lg:mt-12">
  <p className="text-3xl font-bold leading-tight tracking-tight text-brand-heading sm:text-4xl">
    {nigeriaChallenge.paragraphs[0]}
  </p>

  <p className="mt-3 text-lg font-medium leading-7 text-muted-foreground sm:text-xl">
    {nigeriaChallenge.paragraphs[1]}
  </p>

  <div className="mx-auto mt-5 max-w-2xl space-y-3 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
    <p>{nigeriaChallenge.paragraphs[2]}</p>

    <p>{nigeriaChallenge.paragraphs[3]}</p>

    <p>{nigeriaChallenge.paragraphs[4]}</p>
  </div>

  <p className="mx-auto mt-8 max-w-3xl text-2xl font-semibold leading-9 tracking-tight text-brand-heading sm:text-3xl sm:leading-10">
    {nigeriaChallenge.paragraphs[5]}
  </p>
</div>

      
      </Container>
    </section>
  );
}