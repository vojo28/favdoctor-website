import { EcosystemHero } from "@/components/ecosystem/ecosystem-hero";
import { EcosystemBiggerPicture } from "@/components/ecosystem/ecosystem-bigger-picture";
import { EcosystemProducts } from "@/components/ecosystem/ecosystem-products";
import { EcosystemHowTheyConnect } from "@/components/ecosystem/ecosystem-how-they-connect";
import { EcosystemEvolve } from "@/components/ecosystem/ecosystem-evolve";
import { EcosystemFinalCta } from "@/components/ecosystem/ecosystem-final-cta";

export default function EcosystemPage() {
  return (
    <>
      <EcosystemHero />
      <EcosystemBiggerPicture />
      <EcosystemProducts />
      <EcosystemHowTheyConnect />
      <EcosystemEvolve />
      <EcosystemFinalCta />
    </>
  );
}