import Link from "next/link";

import { hero } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function HeroActions() {

  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
      <Button asChild size="xl">
        <Link href={hero.primaryAction.href}>
          {hero.primaryAction.label}
        </Link>
      </Button>

      <Button asChild variant="outline" size="xl">
        <Link href={hero.secondaryAction.href}>
          {hero.secondaryAction.label}
        </Link>
      </Button>
    </div>
  );
}