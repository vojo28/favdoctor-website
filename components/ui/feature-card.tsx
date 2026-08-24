import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group rounded-3xl border border-border bg-card p-8 transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl",
        className
      )}
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
        {icon}
      </div>

      <h3 className="text-xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </article>
  );
}