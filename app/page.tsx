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
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Building Solutions That Make Healthcare Work Better",

  description: siteConfig.description,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "FavDoctor | Building Solutions That Make Healthcare Work Better",

    description: siteConfig.description,

    url: "/",

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "FavDoctor — Building Solutions That Make Healthcare Work Better",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "FavDoctor | Building Solutions That Make Healthcare Work Better",

    description: siteConfig.description,

    images: [siteConfig.ogImage],
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