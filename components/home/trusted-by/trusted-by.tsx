import { Container } from "@/components/layout/container";
import { trustedBy } from "@/data/homepage";
import { TrustedLogo } from "./trusted-logo";

export function TrustedBy() {

  return (
    <section className="border-y bg-muted/30 py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
         

<h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
                {trustedBy.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {trustedBy.description}
          </p>
        </div>

        {trustedBy.logos.length > 0 && (
        <div className="mx-auto mt-16 max-w-5xl">
  <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
    {trustedBy.logos.map((logo) => (
      <div
        key={logo.name}
        className="flex items-center justify-center"
      >
        <TrustedLogo
          name={logo.name}
          image={logo.image}
          href={logo.href}
        />
      </div>
    ))}
  </div>
</div>
        )}
      </Container>
    </section>
  );
}