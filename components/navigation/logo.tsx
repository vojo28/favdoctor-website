import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="transition-opacity hover:opacity-90"
      aria-label="Go to homepage"
    >
      <Image
        src="/logo.svg"
        alt="FavDoctor"
        width={compact ? 140 : 180}
        height={compact ? 40 : 52}
        priority
      />
    </Link>
  );
}