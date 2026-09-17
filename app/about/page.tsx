import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutTeam } from "@/components/about/about-team";
import { AboutPresence } from "@/components/about/about-presence";
import { AboutFinalCta } from "@/components/about/about-final-cta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutPresence />
      <AboutFinalCta />
    </>
  );
}