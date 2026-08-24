import { hero } from "@/data/homepage";
import { HeroActions } from "./hero-actions";
import { HeroBadge } from "./hero-badge";
import { HeroTrust } from "./hero-trust";

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-xl">
      <HeroBadge />

      <h1
        id="hero-heading"
        className="mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-tight text-brand-heading lg:text-7xl"
      >
        {hero.title}
      </h1>

      <p className="mt-8 max-w-lg text-lg leading-8 text-muted-foreground lg:text-xl">
        {hero.description}
      </p>

      <div className="mt-10">
        <HeroActions />
      </div>

      <div className="mt-10">
        <HeroTrust />
      </div>
    </div>
  );
}