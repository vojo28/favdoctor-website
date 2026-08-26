import type { Metadata } from "next";

import { CareLineHero } from "@/components/careline/careline-hero";
import { CareLineChallenge } from "@/components/careline/careline-challenge";
import { careline } from "@/data/careline";
import { CareLineCapabilities } from "@/components/careline/careline-capabilities";
import { CareLineHowItWorks } from "@/components/careline/careline-how-it-works";
import { CareLineAudience } from "@/components/careline/careline-audience";
import { CareLineUseCases } from "@/components/careline/careline-use-cases";
import { CareLineWhy } from "@/components/careline/careline-why";
import { CareLineCTA } from "@/components/careline/careline-cta";

export const metadata: Metadata = {
  title: "FavDoctor CareLine",
  description: careline.hero.description,

  alternates: {
    canonical: "/ecosystem/careline",
  },
};

export default function CareLinePage() {
  return (
    <>
      <CareLineHero />
      <CareLineChallenge />
      <CareLineCapabilities />
      <CareLineHowItWorks />
      <CareLineAudience />
       <CareLineUseCases />
       <CareLineWhy />
         <CareLineCTA />
    </>
  );
}