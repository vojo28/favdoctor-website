import { CareersHero } from "@/components/careers/careers-hero";
import { CareersWhyFavDoctor } from "@/components/careers/careers-why-favdoctor";
import { CareersWhoWeLookFor } from "@/components/careers/careers-who-we-look-for";
import { CareersHowWeWork } from "@/components/careers/careers-how-we-work";
import { CareersOpportunities } from "@/components/careers/careers-opportunities";
import { CareersFinalCta } from "@/components/careers/careers-final-cta";

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersWhyFavDoctor />
      <CareersWhoWeLookFor />
      <CareersHowWeWork />
      <CareersOpportunities />
      <CareersFinalCta />
    </>
  );
}