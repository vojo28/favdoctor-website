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
            className="overflow-hidden rounded-2xl border border-border"
          >
            <div className="aspect-[4/3] bg-muted" />

            <div className="p-4">
              <p className="text-xs font-semibold uppercase text-primary">
                {post.category}
              </p>

              <h3 className="mt-2 text-sm font-semibold leading-6">
                {post.title}
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