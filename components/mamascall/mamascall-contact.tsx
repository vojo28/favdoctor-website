import Link from "next/link";
import {
  Phone,
  ArrowUpRight,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { mamascall } from "@/data/mamascall";

export function MamaCallContact() {
  const { contact } = mamascall;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 size-[38rem] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[120px]"
      />

      <Container className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-[1.5rem] bg-primary text-primary-foreground">
            <Phone className="size-8" />
          </div>

          <p className="mt-8 text-sm font-semibold tracking-wider text-primary">
            {contact.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-brand-heading lg:text-6xl">
            {contact.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {contact.description}
          </p>

          {/* Phone number */}
          <div className="mt-12 lg:mt-14">
            <a
              href={contact.phoneHref}
              className="group inline-flex flex-col items-center"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground">
                CALL MAMA'S CALL
              </span>

              <span className="mt-3 text-4xl font-bold tracking-tight text-primary transition-transform duration-300 group-hover:scale-[1.03] sm:text-5xl lg:text-7xl">
                {contact.phone}
              </span>
            </a>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              {contact.note}
            </p>
          </div>

          {/* Supporting details */}
          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-5 text-left">
              <HeartHandshake className="size-6 text-primary" />

              <p className="mt-4 text-sm font-medium text-brand-heading">
                Mothers and families
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Support can begin with a simple conversation.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5 text-left">
              <ShieldCheck className="size-6 text-primary" />

              <p className="mt-4 text-sm font-medium text-brand-heading">
                Finding the next step
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Helping make the path toward appropriate care clearer.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href={contact.secondaryCta.href}>
                {contact.secondaryCta.label}
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="mx-auto mt-10 max-w-2xl text-xs leading-6 text-muted-foreground">
            {contact.disclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
}