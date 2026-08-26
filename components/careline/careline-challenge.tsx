import {
  ArrowDown,
  Link2Off,
  MessageCircle,
  Phone,
  Table2,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { careline } from "@/data/careline";

export function CareLineChallenge() {
  const { challenge } = careline;

  return (
    <section className="border-b border-border bg-background">
      <Container className="py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold tracking-wider text-primary">
              {challenge.eyebrow}
            </p>

            <h2 className="mt-5 max-w-xl text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-5xl">
              {challenge.title}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              {challenge.description}
            </p>
          </div>

          {/* Visual */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-brand-surface p-6 sm:p-8">
            {/* Background accent */}
            <div
              aria-hidden
              className="absolute -right-16 -top-16 size-48 rounded-full bg-brand-blue/10 blur-3xl"
            />

            <div className="relative">
              <p className="text-sm font-medium text-muted-foreground">
                Communication can become fragmented
              </p>

              {/* Disconnected channels */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-border bg-background p-4 text-center shadow-sm">
                  <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <Phone className="size-5" />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-brand-heading">
                    Calls
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-4 text-center shadow-sm">
                  <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <MessageCircle className="size-5" />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-brand-heading">
                    Messages
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-4 text-center shadow-sm">
                  <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <Table2 className="size-5" />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-brand-heading">
                    Data
                  </p>
                </div>
              </div>

              {/* Disconnected indicator */}
              <div className="relative my-8 flex items-center justify-center">
                <div className="absolute inset-x-0 top-1/2 h-px bg-border" />

                <div className="relative flex size-12 items-center justify-center rounded-full border border-brand-red/20 bg-background text-brand-red shadow-sm">
                  <Link2Off className="size-5" />
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowDown className="size-5 text-primary" />
              </div>

              {/* Connected CareLine system */}
              <div className="mt-5 overflow-hidden rounded-2xl bg-brand-heading p-5">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Workflow className="size-6" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-wider text-white/60">
                      FAVDOCTOR
                    </p>

                    <p className="mt-1 text-xl font-semibold text-white">
                      CareLine
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
                    Connect
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
                    Support
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
                    Follow up
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}