import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({
  children,
  className,
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}