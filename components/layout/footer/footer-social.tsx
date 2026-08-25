import Link from "next/link";

import { footer } from "@/data/footer";

export function FooterSocial() {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider">
        Connect
      </h3>

      <ul className="mt-4 space-y-3">
        {footer.social.map((item) => (
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
    </div>
  );
}