import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-5 py-2 text-sm font-medium text-secondary">
      <Sparkles className="size-4" />
      Fixing & Strengthening Healthcare Systems
    </div>
  );
}