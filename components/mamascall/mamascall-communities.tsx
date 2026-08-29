import {
  Building2,
  House,
  Check,
  ArrowDown,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { mamascall } from "@/data/mamascall";

export function MamaCallCommunities() {
  const { communities } = mamascall;

  return (
    <section className="relative overflow-hidden">
      <Container className="py-20 lg:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {communities.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {communities.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {communities.description}
          </p>
        </div>

        {/* Rural / Urban */}
        <div className="relative mt-16 grid gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {/* Rural */}
          <CommunityCard
            icon={<House className="size-7" />}
            label={communities.rural.label}
            title={communities.rural.title}
            description={communities.rural.description}
            points={communities.rural.points}
          />

          {/* Urban */}
          <CommunityCard
            icon={<Building2 className="size-7" />}
            label={communities.urban.label}
            title={communities.urban.title}
            description={communities.urban.description}
            points={communities.urban.points}
          />
        </div>

        {/* Shared connection */}
        <div className="relative mx-auto mt-10 flex max-w-3xl flex-col items-center text-center lg:mt-14">
          <div className="flex size-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
            <ArrowDown className="size-5" />
          </div>

          <div className="mt-5 rounded-[2rem] border border-border bg-brand-surface px-8 py-8 lg:px-12 lg:py-10">
            <p className="text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
              {communities.closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface CommunityCardProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  points: readonly string[];
}

function CommunityCard({
  icon,
  label,
  title,
  description,
  points,
}: CommunityCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-background p-7 lg:p-10">
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/[0.04] blur-3xl"
      />

      <div className="relative">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>

        <p className="mt-8 text-xs font-bold tracking-[0.18em] text-primary">
          {label}
        </p>

        <h3 className="mt-4 text-balance text-3xl font-bold tracking-tight text-brand-heading">
          {title}
        </h3>

        <p className="mt-5 leading-7 text-muted-foreground">
          {description}
        </p>

        <div className="mt-8 border-t border-border pt-6">
          <ul className="space-y-4">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3" />
                </span>

                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}