import { hero } from "@/data/homepage";
export function HeroBadge() {

  if (!hero.badge) return null;

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 shadow-sm">
      <span className="text-sm font-medium text-muted-foreground">
        {hero.badge}
      </span>
    </div>
  );
}