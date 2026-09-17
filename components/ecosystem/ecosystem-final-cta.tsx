import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ecosystem } from "@/data/ecosystem";

export function EcosystemFinalCta() {
  const { finalCta } = ecosystem;

  return (
    <section className="bg-brand-navy">
      <Container>
        <div className="py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-blue">
              {finalCta.eyebrow}
            </p>

            <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {finalCta.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
              {finalCta.description}
            </p>

            <div className="mt-9">
              <Link
                href={finalCta.cta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy transition-all duration-300 hover:gap-3 hover:bg-brand-surface"
              >
                {finalCta.cta.label}

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}