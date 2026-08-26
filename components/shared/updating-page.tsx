import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";

export default function UpdatingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-healthcare px-6">
      <div className="w-full max-w-2xl text-center">
        

        <div className="mt-12 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <RefreshCw className="h-8 w-8 text-primary" />
          </div>
        </div>

        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
          We're making a few updates.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          We&apos;re currently improving this part of the FavDoctor website
          to bring you a better experience.
        </p>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
          Please check back soon. We&apos;re working on something better.
        </p>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <p className="mt-16 text-sm text-muted-foreground">
          © {new Date().getFullYear()} FavDoctor. All rights reserved.
        </p>
      </div>
    </main>
  );
}