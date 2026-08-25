import Link from "next/link";

import { footer } from "@/data/footer";

export function FooterNavigation() {
  return (
    <nav aria-labelledby="footer-navigation">
      <h3
        id="footer-navigation"
        className="text-sm font-semibold uppercase tracking-wider"
      >
        Explore
      </h3>

      <ul className="mt-4 space-y-3">
        {footer.navigation.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}