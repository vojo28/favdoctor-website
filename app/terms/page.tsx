import type { Metadata } from "next";

import { TermsHero } from "@/components/terms/terms-hero";
import { TermsContent } from "@/components/terms/terms-content";

export const metadata: Metadata = {
  title: "Terms of Use | FavDoctor",
  description:
    "Terms governing the use of the FavDoctor website and related services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsContent />
    </>
  );
}