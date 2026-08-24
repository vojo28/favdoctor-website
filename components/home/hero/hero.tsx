import { Container } from "@/components/layout/container";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden py-20 lg:min-h-[90vh] lg:py-0"
    >
      <HeroBackground />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:min-h-[90vh] lg:grid-cols-[42%_58%] lg:gap-8">
          <HeroContent />

          <div className="relative flex justify-end">
            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
}