interface StatProps {
  value: string;
  label: string;
}

export function Stat({
  value,
  label,
}: StatProps) {
  return (
    <div>
      <h3 className="text-5xl font-bold text-primary">
        {value}
      </h3>

      <p className="mt-2 text-muted-foreground">
        {label}
      </p>
    </div>
  );
}