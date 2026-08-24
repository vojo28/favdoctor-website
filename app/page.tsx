import { Hero } from "@/components/home/hero";
import { TrustedBy } from "@/components/home/trusted-by";
import { WhatWeBuild } from "@/components/home/what-we-build";
import { Ecosystem } from "@/components/home/ecosystem";
import { ImpactAreas } from "@/components/home/impact-areas";
import { People } from "@/components/home/people";
import { Insights } from "@/components/home/insights";
import { PartnerCTA } from "@/components/home/partner-cta/partner-cta";
export default function HomePage() {
  return (
    <>

  <main>
  <Hero />
  <TrustedBy />
  <WhatWeBuild />
  <Ecosystem />
  <ImpactAreas />
  <People />
  <Insights />
   <PartnerCTA />
  </main>

    
    </>
  );
}