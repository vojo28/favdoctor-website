import { Container } from "@/components/layout/container";
import { about } from "@/data/about";

export function AboutStory() {
  const { story } = about;

  return (
    <section className="border-b border-border/60 bg-brand-surface">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20 lg:py-20">
          {/* Section label */}
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              {story.eyebrow}
            </p>
          </div>

          {/* Story */}
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {story.title}
            </h2>

            <div className="mt-7 space-y-5">
              {story.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}