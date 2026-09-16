import {
  ArrowRight,
  ClipboardList,
  Users,
  MapPinned,
  Database,
  Settings2,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { research } from "@/data/research";

const icons = [
  ClipboardList,
  Users,
  MapPinned,
  Database,
  Settings2,
  Sparkles,
];

export function ResearchGap() {
  const { gap } = research;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {gap.eyebrow}
            </p>

            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {gap.title}
            </h2>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="w-full max-w-xl">
              <p className="text-xl font-semibold leading-8 tracking-tight text-brand-heading sm:text-2xl lg:text-3xl lg:leading-10">
                {gap.paragraphs[0]}
              </p>

              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                {gap.paragraphs[1]}
              </p>

              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                {gap.paragraphs[2]}
              </p>
            </div>
          </div>
        </div>

        {/* Research journey */}
        <div className="mt-16 lg:mt-20">
          <div className="relative">
            {/* Connecting line */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block"
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
              {gap.journey.map((item, index) => {
                const Icon = icons[index];
                const isLast = index === gap.journey.length - 1;

                return (
                  <div key={item} className="relative">
                    <div className="flex items-start gap-4 lg:block">
                      {/* Number / icon */}
                      <div
                        className={[
                          "relative z-10 flex size-16 shrink-0 items-center justify-center rounded-2xl border",
                          isLast
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-primary",
                        ].join(" ")}
                      >
                        <Icon className="size-6" strokeWidth={1.7} />
                      </div>

                      <div className="pt-1 lg:mt-6 lg:pt-0">
                        <p className="text-xs font-bold tracking-[0.18em] text-primary/60">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-brand-heading">
                          {item}
                        </h3>
                      </div>
                    </div>

                    {/* Mobile connector */}
                    {!isLast && (
                      <div
                        aria-hidden
                        className="absolute bottom-[-2rem] left-8 top-16 hidden w-px bg-border sm:block lg:hidden"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 border-t border-border pt-10 lg:mt-20 lg:pt-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-3xl text-balance text-2xl font-semibold leading-9 tracking-tight text-brand-heading sm:text-3xl lg:text-4xl lg:leading-tight">
              {gap.closing}
            </p>

            <div
              aria-hidden
              className="hidden size-12 shrink-0 items-center justify-center rounded-full border border-border bg-background lg:flex"
            >
              <ArrowRight className="size-5 text-primary" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}