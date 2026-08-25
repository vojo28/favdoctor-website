import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/images/logo/favdoctor-logo.svg"
      alt="FavDoctor"
      width={180}
      height={42}
      priority
      className={className}
    />
  );
}