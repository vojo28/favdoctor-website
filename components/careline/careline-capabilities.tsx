import {
  Bot,
  Languages,
  MessageCircle,
  Phone,
  Route,
  RefreshCw,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { careline } from "@/data/careline";

const icons = [
  Phone,
  RefreshCw,
  Route,
  MessageCircle,
  Languages,
  Bot,
];

export function CareLineCapabilities() {
  const { capabilities } = careline;

  return (
    <section
      id="capabilities"
      className="bg-brand-surface"
    >
      <Container className="pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wider text-primary">
            {capabilities.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-5xl">
            {capabilities.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-brand-heading">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}