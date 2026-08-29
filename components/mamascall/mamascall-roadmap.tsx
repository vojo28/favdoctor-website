import {
  Rocket,
  Radio,
  Phone,
  WalletCards,
  Network,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { mamascall } from "@/data/mamascall";

const icons = [
  Rocket,
  Radio,
  Phone,
  WalletCards,
  Network,
];

export function MamaCallRoadmap() {
  const { roadmap } = mamascall;

  return (
    <section className="relative overflow-hidden">
      <Container className="py-20 lg:py-28">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {roadmap.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {roadmap.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {roadmap.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 lg:mt-20">
          {/* Vertical timeline */}
          <div
            aria-hidden
            className="absolute bottom-8 left-6 top-8 w-px bg-border lg:left-1/2"
          />

          <div className="space-y-10">
            {roadmap.milestones.map((milestone, index) => {
              const Icon = icons[index];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${milestone.date}-${milestone.title}`}
                  className="relative grid lg:grid-cols-2 lg:gap-20"
                >
                  {/* Desktop left content */}
                  <div
                    className={[
                      "hidden lg:block",
                      isLeft ? "text-right" : "order-2",
                    ].join(" ")}
                  >
                    <RoadmapContent
                      milestone={milestone}
                      Icon={Icon}
                      align={isLeft ? "right" : "left"}
                    />
                  </div>

                  {/* Timeline point */}
                  <div className="absolute left-6 top-7 z-10 flex size-12 -translate-x-1/2 items-center justify-center rounded-2xl border border-primary/20 bg-background text-primary lg:left-1/2">
                    <Icon className="size-5" />
                  </div>

                  {/* Mobile content */}
                  <div className="pl-14 lg:hidden">
                    <RoadmapContent
                      milestone={milestone}
                      Icon={Icon}
                      align="left"
                      hideIcon
                    />
                  </div>

                  {/* Empty desktop side */}
                  <div
                    className={[
                      "hidden lg:block",
                      isLeft ? "order-2" : "",
                    ].join(" ")}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Future statement */}
        <div className="mt-20 border-t border-border pt-10 lg:mt-28 lg:pt-14">
          <p className="max-w-4xl text-balance text-2xl font-medium leading-relaxed text-brand-heading lg:text-4xl">
            Mama's Call is building toward a future where getting maternal
            health support is easier, more connected, and designed around the
            realities of mothers and families.
          </p>
        </div>
      </Container>
    </section>
  );
}

interface RoadmapContentProps {
  milestone: {
    readonly date: string;
    readonly title: string;
    readonly description: string;
    readonly status: string;
  };
  Icon: React.ElementType;
  align: "left" | "right";
  hideIcon?: boolean;
}

function RoadmapContent({
  milestone,
  Icon,
  align,
  hideIcon = false,
}: RoadmapContentProps) {
  const statusStyles = {
    completed: "bg-primary/10 text-primary",
    current: "bg-primary text-primary-foreground",
    upcoming: "bg-brand-surface text-brand-heading",
    future: "bg-muted text-muted-foreground",
  };

  return (
    <div
      className={[
        "relative",
        align === "right" ? "lg:ml-auto lg:max-w-md" : "lg:max-w-md",
      ].join(" ")}
    >
      <div
        className={[
          "flex items-center gap-3",
          align === "right" ? "lg:justify-end" : "",
        ].join(" ")}
      >
        {!hideIcon && (
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary lg:hidden">
            <Icon className="size-5" />
          </div>
        )}

        <span
          className={[
            "inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
            statusStyles[
              milestone.status as keyof typeof statusStyles
            ] ?? statusStyles.future,
          ].join(" ")}
        >
          {milestone.status}
        </span>
      </div>

      <p className="mt-4 text-sm font-bold tracking-[0.15em] text-primary">
        {milestone.date}
      </p>

      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-brand-heading">
        {milestone.title}
      </h3>

      <p className="mt-3 leading-7 text-muted-foreground">
        {milestone.description}
      </p>
    </div>
  );
}