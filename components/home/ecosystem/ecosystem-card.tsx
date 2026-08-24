interface EcosystemCardProps {
  title: string;
  subtitle?: string;
  description: string;
}

export function EcosystemCard({
  title,
  subtitle,
  description,
}: EcosystemCardProps) {
  return (
    <article className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
    </article>
  );
}