"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

import { DesktopNavigation } from "./desktop-navigation";
import { Logo } from "./logo";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show the header near the top
      if (currentScrollY < 80) {
        setVisible(true);
      } 
      // Scrolling down → hide header
      else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } 
      // Scrolling up → show header
      else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[60] border-b border-border bg-background/95 backdrop-blur transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
    >
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