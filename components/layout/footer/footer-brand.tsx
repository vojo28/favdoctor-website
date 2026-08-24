import Link from "next/link";

import { footer } from "@/data/footer";
import { Logo } from "@/components/layout/logo";

export function FooterBrand() {
  return (
    <div className="max-w-md">
      <Link href="/" aria-label="FavDoctor">
        <Logo />
      </Link>

      <p className="mt-6 text-base leading-7 text-muted-foreground">
        {footer.description}
      </p>
    </div>
  );
}