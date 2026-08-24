import { cn } from "@/lib/utils";

interface FeatureGridProps {
  children: React.ReactNode;
  className?: string;
}

export function FeatureGrid({
  children,
  className,
}: FeatureGridProps) {
  return (
    <div
      className={cn(
        "mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}