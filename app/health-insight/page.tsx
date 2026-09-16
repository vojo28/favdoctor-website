import { HealthInsightHero } from "@/components/health-insight/health-insight-hero";
import { HealthInsightNigeriaChallenge } from "@/components/health-insight/health-insight-nigeria-challenge";
import { HealthInsightProblem } from "@/components/health-insight/health-insight-problem";
import { HealthInsightWhatWeDo } from "@/components/health-insight/health-insight-what-we-do";
import { HealthInsightGatherings } from "@/components/health-insight/health-insight-gatherings";
import { HealthInsightOrganisations } from "@/components/health-insight/health-insight-organisations";
import { HealthInsightCommunities } from "@/components/health-insight/health-insight-communities";
import { HealthInsightOpportunity } from "@/components/health-insight/health-insight-opportunity";
import { HealthInsightHowItWorks } from "@/components/health-insight/health-insight-how-it-works";
import { HealthInsightPeople } from "@/components/health-insight/health-insight-people";
import { HealthInsightImpact } from "@/components/health-insight/health-insight-impact";
import { HealthInsightVision } from "@/components/health-insight/health-insight-vision";
import { HealthInsightContinuity } from "@/components/health-insight/health-insight-continuity";
import { HealthInsightPopulationIntelligence } from "@/components/health-insight/health-insight-population-intelligence";
import { HealthInsightEarlierAction } from "@/components/health-insight/health-insight-earlier-action";
import { HealthInsightEnvironments } from "@/components/health-insight/health-insight-environments";
import { HealthInsightApproach } from "@/components/health-insight/health-insight-approach";
import { HealthInsightFinalCta } from "@/components/health-insight/health-insight-final-cta";

export default function HealthInsightPage() {
  return (
    <main>
      {/* 01 — Hero */}
      <HealthInsightHero />
      <HealthInsightNigeriaChallenge />
      <HealthInsightProblem />
      <HealthInsightWhatWeDo />
      <HealthInsightGatherings />
      <HealthInsightOrganisations />
      <HealthInsightCommunities />
      <HealthInsightHowItWorks />
      <HealthInsightPeople />
      <HealthInsightImpact />
      <HealthInsightVision />
      <HealthInsightFinalCta />
     
    </main>
  );
}