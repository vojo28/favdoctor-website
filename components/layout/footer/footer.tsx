import { Container } from "@/components/layout/container";

import { FooterBottom } from "./footer-bottom";
import { FooterBrand } from "./footer-brand";
import { FooterNavigation } from "./footer-navigation";
import { FooterSocial } from "./footer-social";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="flex justify-center lg:col-span-6 lg:justify-start">
            <FooterBrand />
          </div>

          {/* Navigation + Social */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-6">
            <FooterNavigation />
            <FooterSocial />
          </div>
        </div>

        <div className="mt-12">
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
}