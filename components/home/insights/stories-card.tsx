import Image from "next/image";
import Link from "next/link";

import { insights } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function StoriesCard() {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-10">
      <h2 className="text-3xl font-bold tracking-tight">
        {insights.title}
      </h2>

      <p className="mt-6 text-muted-foreground">
        {insights.description}
      </p>

      <Button asChild className="mt-8 self-start">
        <Link href={insights.cta.href}>
          {insights.cta.label}
        </Link>
      </Button>

      <div className="mt-auto pt-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {insights.posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg"
            >
              {/* Clickable Image */}
              <Link
                href={post.href}
                className="relative block aspect-[4/3] overflow-hidden bg-muted"
                aria-label={`Read ${post.title}`}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="p-4">
                {/* Clickable Category */}
                <Link
                  href={post.href}
                  className="text-xs font-semibold uppercase tracking-wide text-primary transition-colors hover:text-brand-blue"
                >
                  {post.category}
                </Link>

                {/* Clickable Title */}
                <h3 className="mt-2 text-sm font-semibold leading-6">
                  <Link
                    href={post.href}
                    className="transition-colors hover:text-brand-blue"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 text-xs text-muted-foreground">
                  {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}