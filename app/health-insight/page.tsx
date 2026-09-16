import { HealthInsightHero } from "@/components/health-insight/health-insight-hero";
import { HealthInsightNigeriaChallenge } from "@/components/health-insight/health-insight-nigeria-challenge";
import { HealthInsightProblem } from "@/components/health-insight/health-insight-problem";
import { HealthInsightWhatWeDo } from "@/components/health-insight/health-insight-what-we-do";
import { HealthInsightGatherings } from "@/components/health-insight/health-insight-gatherings";
import { HealthInsightOrganisations } from "@/components/health-insight/health-insight-organisations";
import { HealthInsightCommunities } from "@/components/health-insight/health-insight-communities";
import { HealthInsightHowItWorks } from "@/components/health-insight/health-insight-how-it-works";
import { HealthInsightPeople } from "@/components/health-insight/health-insight-people";
import { HealthInsightImpact } from "@/components/health-insight/health-insight-impact";
import { HealthInsightVision } from "@/components/health-insight/health-insight-vision";
import { HealthInsightFinalCta } from "@/components/health-insight/health-insight-final-cta";

export default function HealthInsightPage() {
  return (
    <>
      <HealthInsightHero />
      <HealthInsightNigeriaChallenge />
      <HealthInsightProblem />
      <HealthInsightWhatWeDo />

      <div id="solutions">
        <HealthInsightGatherings />
        <HealthInsightOrganisations />
        <HealthInsightCommunities />
      </div>

      <HealthInsightHowItWorks />
      <HealthInsightPeople />
      <HealthInsightImpact />
      <HealthInsightVision />
      <HealthInsightFinalCta />
    </>
  );
}