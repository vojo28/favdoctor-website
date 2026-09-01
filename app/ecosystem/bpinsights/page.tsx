import type { Metadata } from "next";

import { BPInsightsHero } from "@/components/bpinsights/bpinsights-hero";
import { BPInsightsBiggerPicture } from "@/components/bpinsights/bpinsights-bigger-picture";
import { BPInsightsChallenge } from "@/components/bpinsights/bpinsights-challenge";
import { BPInsightsIntelligence } from "@/components/bpinsights/bpinsights-intelligence";
import { BPInsightsCapabilities } from "@/components/bpinsights/bpinsights-capabilities";
import { BPInsightsHowItWorks } from "@/components/bpinsights/bpinsights-how-it-works";
import { BPInsightsIndividuals } from "@/components/bpinsights/bpinsights-individuals";
import { BPInsightsHealthcareTeams } from "@/components/bpinsights/bpinsights-healthcare-teams";
import { BPInsightsTreatment } from "@/components/bpinsights/bpinsights-treatment";
import { BPInsightsLongitudinal } from "@/components/bpinsights/bpinsights-longitudinal";
import { BPInsightsVision } from "@/components/bpinsights/bpinsights-vision";
import { BPInsightsPartnership } from "@/components/bpinsights/bpinsights-partnership";

export const metadata: Metadata = {
  title: "BP Insights | Cardiovascular Health Intelligence",
  description:
    "BP Insights is designed to make cardiovascular health more predictable, preventable, and manageable by transforming continuously evolving health data into actionable intelligence.",
};

export default function BPInsightsPage() {
  return (
    <main>
      <BPInsightsHero />
      <BPInsightsBiggerPicture />
      <BPInsightsChallenge />
      <BPInsightsIntelligence />
      <BPInsightsCapabilities />
      <BPInsightsHowItWorks />
      <BPInsightsIndividuals />
      <BPInsightsHealthcareTeams />
      <BPInsightsTreatment />
      <BPInsightsLongitudinal />
      <BPInsightsVision />
      <BPInsightsPartnership />
    </main>
  );
}