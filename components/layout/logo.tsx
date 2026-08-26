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
        src="/images/logo/favdoctor-logo.svg"
        alt="FavDoctor"
        width={180}
        height={42}
        priority
        className="h-auto w-[180px]"
      />
    </Link>
  );
}