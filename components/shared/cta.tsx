import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function CTA() {
  return (
    <Section>
      <Container>
        <div className="rounded-[2rem] bg-brand-gradient p-12 text-center text-white">
          <h2 className="text-4xl font-bold">
            Let's build better healthcare together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Partner with FavDoctor to strengthen healthcare
            systems through technology, research, and innovation.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button variant="glass" size="xl">
              Become a Partner
            </Button>

            <Button variant="outline" size="xl">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}