import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ecosystem } from "@/data/ecosystem";

export function EcosystemProducts() {
  const { products } = ecosystem;

  return (
    <section id="solutions" className="border-b border-border/60 bg-background">
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-primary">
                {products.eyebrow}
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-brand-heading sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                {products.title}
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {products.description}
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-border/70">
            {products.items.map((item, index) => (
              <article
                key={item.name}
                className="group grid gap-5 border-b border-border/70 py-8 lg:grid-cols-[80px_0.7fr_1.3fr_auto] lg:items-center lg:gap-8"
              >
                <span className="text-sm font-semibold tracking-[0.12em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-[-0.025em] text-brand-heading">
                    {item.name}
                  </h3>
                </div>

                <p className="max-w-xl text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  aria-label={`Explore ${item.name}`}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-brand-heading transition-all duration-300 group-hover:border-primary group-hover:text-primary"
                >
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}