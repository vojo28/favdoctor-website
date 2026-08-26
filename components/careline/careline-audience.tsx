import {
  Building2,
  HeartHandshake,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { careline } from "@/data/careline";

export function CareLineAudience() {
  const { audience } = careline;

  return (
    <section className="bg-brand-surface">
      <Container className="py-20 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {audience.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-5xl">
            {audience.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          {/* Organizations */}
          <div className="rounded-3xl border border-border bg-card p-7 lg:p-8">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Building2 className="size-6" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-brand-heading">
              Organizations
            </h3>

            <p className="mt-2 text-muted-foreground">
              Organizations that need better ways to engage and support people.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {audience.organizations.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CareLine connector */}
          <div className="flex items-center justify-center py-2 lg:py-0">
            <div className="flex flex-col items-center gap-3">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <HeartHandshake className="size-7" />
              </div>

              <span className="text-sm font-semibold text-primary">
                CARELINE
              </span>
            </div>
          </div>

          {/* People */}
          <div className="rounded-3xl border border-border bg-card p-7 lg:p-8">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Users className="size-6" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-brand-heading">
              People
            </h3>

            <p className="mt-2 text-muted-foreground">
              The people organizations need to reach, engage, and support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {audience.people.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}