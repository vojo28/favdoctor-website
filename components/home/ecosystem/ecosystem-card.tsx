import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EcosystemCardProps {
  title: string;
  subtitle?: string;
  description: string;
  href: string;
}

export function EcosystemCard({
  title,
  subtitle,
  description,
  href,
}: EcosystemCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      {subtitle && (
        <p className="mt-2 text-sm font-medium text-primary">
          {subtitle}
        </p>
      )}

      <p className="mt-6 leading-7 text-muted-foreground">
        {description}
      </p>

      <Link
        href={href}
        className="group mt-8 inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
      >
        Find out more
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}