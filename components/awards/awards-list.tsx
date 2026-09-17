import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { awards } from "@/data/awards";

export function AwardsList() {
  const { recognitions } = awards;

  return (
    <section className="border-b border-border/60 bg-background">
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-primary">
                AWARDS & GRANTS
              </p>

              <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
                A record of recognitions, opportunities, and milestones that
                have shaped the journey.
              </p>
            </div>

            <div>
              <div className="divide-y divide-border/70 border-t border-border/70">
                {recognitions.map((recognition) => (
                  <article
                    key={`${recognition.organisation}-${recognition.title}`}
                    className="py-8 first:pt-8 last:pb-0"
                  >
                    <div className="grid gap-5 sm:grid-cols-[80px_1fr] sm:gap-8">
                      <div>
                        <p className="text-sm font-semibold text-primary">
                          {recognition.year || "—"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground">
                          {recognition.organisation}
                        </p>

                        <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-brand-heading sm:text-3xl">
                          {recognition.title}
                        </h3>

                        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                          {recognition.description}
                        </p>

                        {recognition.href && (
                          <Link
                            href={recognition.href}
                            className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-heading transition-colors hover:text-primary"
                          >
                            Read the story
                            <ArrowUpRight
                              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}