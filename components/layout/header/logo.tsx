import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="FavDoctor Home"
      className={className}
    >
      <Image
        src="/images/logo/favdoctor-logo.svg" // Update with your actual logo path
        alt="FavDoctor"
        width={180}
        height={40}
        priority
      />
    </Link>
  );
}