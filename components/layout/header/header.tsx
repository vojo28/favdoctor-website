import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

import { DesktopNavigation } from "./desktop-navigation";
import { Logo } from "./logo";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  return (
    <header className="relative z-[60] border-b border-border bg-background">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <DesktopNavigation />

        <div className="flex items-center gap-4">
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/contact">Contact Us</Link>
          </Button>

          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}