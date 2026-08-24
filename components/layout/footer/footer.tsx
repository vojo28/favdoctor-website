import { Container } from "@/components/layout/container";

import { FooterBottom } from "./footer-bottom";
import { FooterBrand } from "./footer-brand";
import { FooterNavigation } from "./footer-navigation";
import { FooterSocial } from "./footer-social";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <FooterBrand />
          </div>

          <div className="lg:col-span-3">
            <FooterNavigation />
          </div>

          <div className="lg:col-span-3">
            <FooterSocial />
          </div>
        </div>

        <div className="mt-16">
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
}