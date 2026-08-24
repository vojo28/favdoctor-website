import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">

        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline">
            Contact
          </Button>

          <Button>
            Partner With Us
          </Button>
        </div>

      </Container>
    </header>
  );
}