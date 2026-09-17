import { AwardsHero } from "@/components/awards/awards-hero";
import { AwardsList } from "@/components/awards/awards-list";
import { AwardsCollaborations } from "@/components/awards/awards-collaborations";
import { AwardsFinalCta } from "@/components/awards/awards-final-cta";

export default function AwardsPage() {
  return (
    <>
      <AwardsHero />
          <AwardsList />
      <AwardsCollaborations />
      <AwardsFinalCta />
    </>
  );
}