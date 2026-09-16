import { ResearchHero } from "@/components/research/research-hero";
import { ResearchGap } from "@/components/research/research-gap";
import { ResearchWhatWeDo } from "@/components/research/research-what-we-do";
import { ResearchReach } from "@/components/research/research-reach";
import { ResearchExperience } from "@/components/research/research-experience";
import { ResearchTechnology } from "@/components/research/research-technology";
import { ResearchAudiences } from "@/components/research/research-audiences";
import { ResearchFinalCta } from "@/components/research/research-final-cta";

export default function ResearchPage() {
  return (
    <main>
      <ResearchHero />
      <ResearchGap />
      <ResearchWhatWeDo />
      <ResearchReach />
      <ResearchExperience />
      <ResearchTechnology />
      <ResearchAudiences />
      <ResearchFinalCta />
    </main>
  );
}