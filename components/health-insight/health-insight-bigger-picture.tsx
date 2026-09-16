import {
  HeartPulse,
  Activity,
  ArrowDownRight,
  TrendingUp,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { healthInsight } from "@/data/health-insight";

const countries = [
  {
    country: "Nigeria",
    years: 54.9,
    highlight: true,
  },
  {
    country: "India",
    years: 73.9,
  },
  {
    country: "China",
    years: 81.0,
  },
  {
    country: "Japan",
    years: 87.1,
  },
];

export function HealthInsightBiggerPicture() {
  const { biggerPicture } = healthInsight;

  return (
    <section className="relative overflow-hidden bg-brand-heading text-white">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute -left-40 top-0 size-[34rem] rounded-full bg-primary/20 blur-[140px]"
      />

      <div
        aria-hidden
        className="absolute -bottom-40 -right-32 size-[30rem] rounded-full bg-primary/10 blur-[140px]"
      />

      <Container className="relative py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-5xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {biggerPicture.eyebrow}
          </p>

          <h2 className="mt-6 text-balance text-5xl font-bold leading-[0.98] tracking-tight lg:text-7xl">
            {biggerPicture.title}
          </h2>
        </div>

        {/* Main introduction */}
        <div className="mt-12 max-w-3xl lg:mt-16">
          <p className="text-xl leading-9 text-white/70 lg:text-2xl">
            {biggerPicture.description}
          </p>
        </div>

        {/* Life expectancy visual */}
        <div className="mt-16 border-t border-white/10 pt-10 lg:mt-20 lg:pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Data introduction */}
            <div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                <TrendingUp className="size-7" strokeWidth={1.5} />
              </div>

              <p className="mt-8 text-xs font-bold tracking-[0.2em] text-white/40">
                LIFE EXPECTANCY
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight lg:text-4xl">
                The years we have are not the same everywhere.
              </h3>

              <p className="mt-5 max-w-lg leading-7 text-white/60">
                Life expectancy reflects the broader conditions that shape how
                long people live. Prevention, access to healthcare, earlier
                awareness, and timely action all contribute to healthier
                populations.
              </p>

              <p className="mt-6 text-sm leading-6 text-white/40">
                Life expectancy at birth, World Bank estimates for 2024.
              </p>
            </div>

            {/* Comparison */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
              <div className="flex items-end justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-white/40">
                    AVERAGE YEARS
                  </p>

                  <p className="mt-2 text-sm text-white/55">
                    Life expectancy at birth
                  </p>
                </div>

                <p className="text-sm text-white/40">2024</p>
              </div>

              <div className="mt-7 space-y-7">
                {countries.map((country) => (
                  <div key={country.country}>
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-3">
                        <span
                          className={`size-2 rounded-full ${
                            country.highlight
                              ? "bg-primary"
                              : "bg-white/25"
                          }`}
                        />

                        <p
                          className={`font-medium ${
                            country.highlight
                              ? "text-white"
                              : "text-white/65"
                          }`}
                        >
                          {country.country}
                        </p>
                      </div>

                      <p
                        className={`text-lg font-semibold ${
                          country.highlight
                            ? "text-primary"
                            : "text-white"
                        }`}
                      >
                        {country.years}{" "}
                        <span className="text-sm font-normal text-white/40">
                          years
                        </span>
                      </p>
                    </div>

                    {/* Bar */}
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${
                          country.highlight
                            ? "bg-primary"
                            : "bg-white/30"
                        }`}
                        style={{
                          width: `${(country.years / 90) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-white/35">
                Source: World Bank, Life expectancy at birth, total (years),
                2024 estimates.
              </p>
            </div>
          </div>
        </div>

        {/* Healthy life section */}
        <div className="mt-16 grid gap-6 border-t border-white/10 pt-10 lg:mt-24 lg:grid-cols-[1fr_1fr] lg:gap-8 lg:pt-14">
          {/* Healthy years */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-10">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <HeartPulse className="size-7" strokeWidth={1.5} />
            </div>

            <p className="mt-10 text-xs font-bold tracking-[0.2em] text-white/40">
              HEALTHY LIFE EXPECTANCY
            </p>

            <div className="mt-4 flex items-end gap-3">
              <p className="text-6xl font-bold tracking-tight text-white lg:text-7xl">
                54.9
              </p>

              <p className="mb-2 text-lg text-white/50">years</p>
            </div>

            <p className="mt-6 max-w-lg leading-7 text-white/60">
              According to WHO estimates, healthy life expectancy represents
              the number of years a person can expect to live in full health,
              taking into account years affected by disease or injury.
            </p>

            <p className="mt-6 text-xs leading-5 text-white/35">
              Nigeria healthy life expectancy at birth, WHO estimate, 2021.
            </p>
          </div>

          {/* Why this matters */}
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary/10 p-8 lg:p-10">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/20 blur-3xl"
            />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Activity className="size-7" strokeWidth={1.5} />
              </div>

              <p className="mt-10 text-xs font-bold tracking-[0.2em] text-primary">
                WHY THIS MATTERS
              </p>

              <h3 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight lg:text-4xl">
                Better health is not only about living longer.
              </h3>

              <p className="mt-6 max-w-lg leading-7 text-white/70">
                It is also about creating more opportunities for people to
                live healthier lives. Reaching people earlier can support
                prevention, awareness, timely action, and better connections
                to the care they may need.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <ArrowDownRight className="size-5" />
                </div>

                <p className="text-sm leading-6 text-white/60">
                  The earlier we understand health needs, the more
                  opportunities we have to respond before problems become more
                  serious.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 border-t border-white/10 pt-10 lg:mt-24 lg:pt-14">
          <div className="max-w-5xl">
            <p className="text-balance text-3xl font-medium leading-tight text-white lg:text-5xl">
              {biggerPicture.closing}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/40">
            <span>Prevention</span>
            <span className="size-1 rounded-full bg-primary" />
            <span>Earlier awareness</span>
            <span className="size-1 rounded-full bg-primary" />
            <span>Connected care</span>
            <span className="size-1 rounded-full bg-primary" />
            <span>Population health</span>
          </div>
        </div>
      </Container>
    </section>
  );
}