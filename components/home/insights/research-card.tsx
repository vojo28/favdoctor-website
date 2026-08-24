import Image from "next/image";
import Link from "next/link";

import { research } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function ResearchCard() {

  return (
<article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">     
     <div className="grid h-full lg:grid-cols-2">
<div className="flex flex-col p-10">
              <h2 className="text-3xl font-bold tracking-tight">
            {research.title}
          </h2>

          <div className="mt-6 space-y-5 text-muted-foreground">
            {research.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Button asChild className="mt-auto self-start">
            <Link href={research.cta.href}>
              {research.cta.label}
            </Link>
          </Button>
        </div>

       <div className="relative min-h-[320px] lg:min-h-full">
          <Image
            src={research.image.src}
            alt={research.image.alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}