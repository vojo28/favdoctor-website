import Image from "next/image";

import { people } from "@/data/homepage";
import { Container } from "@/components/layout/container";
export function People() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {people.eyebrow}
            </p>

            <h2 className="mt-4 whitespace-pre-line text-4xl font-bold tracking-tight lg:text-5xl">
              {people.title}
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
              {people.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-8 text-lg font-semibold text-foreground">
              {people.emphasis}
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={people.image.src}
              alt={people.image.alt}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}