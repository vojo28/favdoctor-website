import type { Metadata } from "next";

import { MamaCallHero } from "@/components/mamascall/mamascall-hero";
import { MamaCallMaternalChallenge } from "@/components/mamascall/mamascall-maternal-challenge";
import { MamaCallAccess } from "@/components/mamascall/mamascall-access";
import { MamaCallReach } from "@/components/mamascall/mamascall-reach";
import { MamaCallImpact } from "@/components/mamascall/mamascall-impact";
import { MamaCallCommunities } from "@/components/mamascall/mamascall-communities";
import { MamaCallHowItWorks } from "@/components/mamascall/mamascall-how-it-works";
import { mamascall } from "@/data/mamascall";
import { MamaCallRoadmap } from "@/components/mamascall/mamascall-roadmap";
import { MamaCallPartnership } from "@/components/mamascall/mamascall-partnership";
import { MamaCallContact } from "@/components/mamascall/mamascall-contact";
export const metadata: Metadata = {
  title: "Mama's Call",
  description: mamascall.hero.description,

  alternates: {
    canonical: "/ecosystem/mamascall",
  },
};

export default function MamaCallPage() {
  return (
    <>
      <MamaCallHero />
      <MamaCallMaternalChallenge />
      <MamaCallAccess />
      <MamaCallReach />
      <MamaCallCommunities />
      <MamaCallHowItWorks />
      <MamaCallImpact />
      <MamaCallRoadmap />
      <MamaCallPartnership />
      <MamaCallContact />
    </>
  );
}