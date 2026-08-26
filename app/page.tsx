import type { Metadata } from "next";

import { Hero } from "@/components/home/hero";
import { TrustedBy } from "@/components/home/trusted-by";
import { WhatWeBuild } from "@/components/home/what-we-build";
import { Ecosystem } from "@/components/home/ecosystem";
import { ImpactAreas } from "@/components/home/impact-areas";
import { People } from "@/components/home/people";
import { Insights } from "@/components/home/insights";
import { PartnerCTA } from "@/components/home/partner-cta/partner-cta";
import { StructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Building Solutions That Improve Healthcare",

  description:
    "FavDoctor builds solutions that improve healthcare, helping people live longer, healthier, and better lives through technology, research, and strategic partnerships.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "FavDoctor | Building Solutions That Improve Healthcare",

    description:
      "Helping people live longer, healthier, and better lives through technology, research, and strategic partnerships.",

    url: "/",
  },

  twitter: {
    title: "FavDoctor | Building Solutions That Improve Healthcare",

    description:
      "Helping people live longer, healthier, and better lives through technology, research, and strategic partnerships.",
  },
};

export default function HomePage() {
  return (
    <>
     <StructuredData />
     
      <Hero />
      <TrustedBy />
      <WhatWeBuild />
      <Ecosystem />
      <ImpactAreas />
      <People />
      <Insights />
      <PartnerCTA />
    </>
  );
}