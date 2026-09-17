import { PartnershipHero } from "@/components/partnership/partnership-hero";
import { PartnershipWhyPartner } from "@/components/partnership/partnership-why-partner";
import { PartnershipWhatWeBring } from "@/components/partnership/partnership-what-we-bring";
import { PartnershipWhoWePartnerWith } from "@/components/partnership/partnership-who-we-partner-with";
import { PartnershipHowWeWork } from "@/components/partnership/partnership-how-we-work";
import { PartnershipWhatWeCouldBuild } from "@/components/partnership/partnership-what-we-could-build";
import { PartnershipFinalCta } from "@/components/partnership/partnership-final-cta";

export default function PartnershipPage() {
  return (
    <>
      <PartnershipHero />
      <PartnershipWhyPartner />
      <PartnershipWhatWeBring />
      <PartnershipWhoWePartnerWith />
      <PartnershipHowWeWork />
      <PartnershipWhatWeCouldBuild />
      <PartnershipFinalCta />
    </>
  );
}