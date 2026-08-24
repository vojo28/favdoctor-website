import { Check } from "lucide-react";

import { hero } from "@/data/homepage";
export function HeroTrust() {
 
  if (!hero.trust.length) return null;

  return (
    <ul className="mt-10 flex flex-wrap gap-6">
      {hero.trust.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Check className="h-4 w-4 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}