import Image from "next/image";

import { Container } from "@/components/layout/container";
import { about } from "@/data/about";

export function AboutTeam() {
  const { team } = about;

  return (
    <section className="border-b border-border/60 bg-background">
      <Container>
        <div className="py-16 lg:py-20">
          {/* Intro */}
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-primary">
                {team.eyebrow}
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                {team.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {team.description}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                {team.statement}
              </p>
            </div>
          </div>

          {/* Team */}
          {team.members.length > 0 && (
            <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {team.members.map((member) => (
                <article key={member.name}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-surface">
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-brand-heading">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}