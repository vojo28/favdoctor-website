interface QuoteProps {
  quote: string;
  author: string;
  role?: string;
}

export function Quote({
  quote,
  author,
  role,
}: QuoteProps) {
  return (
    <blockquote className="rounded-3xl border border-border bg-card p-10">
      <p className="text-xl leading-9">
        "{quote}"
      </p>

      <footer className="mt-8">
        <strong>{author}</strong>

        {role && (
          <p className="text-muted-foreground">
            {role}
          </p>
        )}
      </footer>
    </blockquote>
  );
}