import {
  Building2,
  MapPinned,
  Network,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { research } from "@/data/research";

export function ResearchReach() {
  const { reach } = research;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <Container className="relative py-20 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {reach.eyebrow}
            </p>

            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight text-brand-heading sm:text-5xl lg:text-6xl">
              {reach.title}
            </h2>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="w-full max-w-xl">
              <p className="text-xl font-semibold leading-8 tracking-tight text-brand-heading sm:text-2xl lg:text-3xl lg:leading-10">
                {reach.description}
              </p>

              <p className="mt-5 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {reach.body}
              </p>
            </div>
          </div>
        </div>

        {/* Reach visual */}
        <div className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-primary lg:mt-20">
          {/* Ambient shapes */}
          <div
            aria-hidden
            className="absolute -right-32 -top-32 size-[32rem] rounded-full bg-white/10 blur-3xl"
          />

          <div
            aria-hidden
            className="absolute -bottom-40 left-1/3 size-[28rem] rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative grid min-h-[430px] lg:grid-cols-[0.9fr_1.1fr]">
            {/* Message */}
            <div className="flex flex-col justify-between p-8 text-white sm:p-10 lg:p-14">
              <div>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15">
                  <MapPinned className="size-7 text-white" strokeWidth={1.7} />
                </div>

                <p className="mt-10 text-xs font-bold tracking-[0.2em] text-white/65">
                  REAL-WORLD IMPLEMENTATION
                </p>

                <h3 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Research needs to work where people actually live and receive
                  care.
                </h3>
              </div>

              <p className="mt-10 max-w-md text-base leading-7 text-white/70">
                Communities. Healthcare facilities. Field teams. Participants.
                Different environments require practical systems that can adapt
                to the realities on the ground.
              </p>
            </div>

            {/* Network visual */}
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-0">
              {/* Grid */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                }}
              />

              {/* Connecting lines */}
              <div
                aria-hidden
                className="absolute left-[20%] top-[28%] h-px w-[60%] rotate-[18deg] bg-white/20"
              />
              <div
                aria-hidden
                className="absolute left-[24%] top-[54%] h-px w-[55%] -rotate-[20deg] bg-white/20"
              />
              <div
                aria-hidden
                className="absolute left-[40%] top-[22%] h-[55%] w-px rotate-[24deg] bg-white/15"
              />

              {/* Central node */}
              <div className="absolute left-1/2 top-1/2 flex size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2.25rem] border border-white/20 bg-white/10 backdrop-blur-sm">
                <Network
                  className="size-16 text-white/90"
                  strokeWidth={1.25}
                />
              </div>

              {/* Nodes */}
              <div className="absolute left-[14%] top-[20%] flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <Users className="size-7 text-white/80" />
              </div>

              <div className="absolute right-[14%] top-[18%] flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <Building2 className="size-7 text-white/80" />
              </div>

              <div className="absolute bottom-[18%] left-[18%] flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <MapPinned className="size-7 text-white/80" />
              </div>

              <div className="absolute bottom-[17%] right-[18%] flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <Network className="size-7 text-white/80" />
              </div>

              {/* Small data points */}
              <div
                aria-hidden
                className="absolute left-[34%] top-[18%] size-2 rounded-full bg-white/60"
              />
              <div
                aria-hidden
                className="absolute right-[32%] top-[44%] size-2 rounded-full bg-white/60"
              />
              <div
                aria-hidden
                className="absolute bottom-[28%] left-[44%] size-2 rounded-full bg-white/60"
              />
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-12 flex flex-col gap-5 border-l-2 border-primary pl-6 lg:mt-16 lg:pl-8">
          <p className="text-balance text-2xl font-semibold leading-9 tracking-tight text-brand-heading sm:text-3xl lg:text-4xl">
            {reach.closing}
          </p>

          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Our growing field relationships and implementation experience help
            research teams work across diverse real-world settings.
          </p>
        </div>
      </Container>
    </section>
  );
}