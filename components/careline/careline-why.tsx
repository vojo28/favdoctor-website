import {
  ArrowDown,
  Building2,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { careline } from "@/data/careline";

export function CareLineWhy() {
  const { why } = careline;

  return (
    <section className="overflow-hidden bg-background">
      <Container className="pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">
          {/* Content */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-primary">
              {why.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
              {why.title}
            </h2>

            <p className="mt-8 text-xl leading-8 text-muted-foreground">
              {why.description}
            </p>

            <p className="mt-6 leading-8 text-muted-foreground lg:text-lg">
              {why.supportingText}
            </p>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Organizations */}
            <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Building2 className="size-6" />
                </div>

                <div>
                  <p className="font-semibold text-brand-heading">
                    Organizations
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Better ways to reach and support people.
                  </p>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center py-4">
              <ArrowDown className="size-5 text-primary" />
            </div>

            {/* CareLine */}
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-heading p-7 shadow-xl">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 size-48 rounded-full bg-brand-blue/20 blur-3xl"
              />

              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.2em] text-white/60">
                  FAVDOCTOR
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  CareLine
                </h3>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <Phone className="size-5 text-white" />

                    <p className="mt-3 text-sm font-medium text-white">
                      Connect
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <MessageCircle className="size-5 text-white" />

                    <p className="mt-3 text-sm font-medium text-white">
                      Engage
                    </p>
                  </div>

                  <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-sm text-white/70">
                      Structured communication, support, coordination, and
                      follow-up designed around the people you need to reach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center py-4">
              <ArrowDown className="size-5 text-primary" />
            </div>

            {/* People */}
            <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Users className="size-6" />
                </div>

                <div>
                  <p className="font-semibold text-brand-heading">
                    People
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Connected to information, support, and the next step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}