import { cn } from "@/lib/utils";

interface CardBaseProps {
  children: React.ReactNode;
  className?: string;
}

export function CardBase({
  children,
  className,
}: CardBaseProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card p-8 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}