import Link from "next/link";

import { footer } from "@/data/footer";

export function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
      <p>
        © {new Date().getFullYear()} FavDoctor. All rights reserved.
      </p>

      <div className="flex items-center gap-6">
        {footer.legal.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}