import { HealthInsightHero } from "@/components/health-insight/health-insight-hero";
import { HealthInsightProblem } from "@/components/health-insight/health-insight-problem";
import { HealthInsightBiggerPicture } from "@/components/health-insight/health-insight-bigger-picture";
import { HealthInsightGatherings } from "@/components/health-insight/health-insight-gatherings";
import { HealthInsightMoreThanOutreach } from "@/components/health-insight/health-insight-more-than-outreach";

export default function HealthInsightPage() {
  return (
    <>
      <HealthInsightHero />
      <HealthInsightProblem />
      <HealthInsightBiggerPicture />
      <HealthInsightGatherings />
      <HealthInsightMoreThanOutreach />
    </>
  );
}