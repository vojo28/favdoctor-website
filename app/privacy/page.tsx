import type { Metadata } from "next";

import { PrivacyHero } from "@/components/privacy/privacy-hero";
import { PrivacyPolicyContent } from "@/components/privacy/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | FavDoctor",
  description:
    "Learn how FavDoctor collects, uses, protects, and handles information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyPolicyContent />
    </>
  );
}