"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="static lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? (
          <X className="size-6" />
        ) : (
          <Menu className="size-6" />
        )}
      </Button>

      {isOpen && (
        <div
          id="mobile-navigation"
         className="absolute left-0 right-0 top-full z-[70] h-[calc(100dvh-5rem)] overflow-y-auto bg-background"
        >
          <nav className="mx-auto flex min-h-full w-full max-w-lg flex-col px-6 py-8">
            <div className="flex flex-col">
              {navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "border-b border-border py-5 text-lg font-medium transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="w-full">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}