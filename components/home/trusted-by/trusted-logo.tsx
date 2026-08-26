import Image from "next/image";
import Link from "next/link";

interface TrustedLogoProps {
  name: string;
  image: string;
  href?: string;
}

export function TrustedLogo({
  name,
  image,
  href,
}: TrustedLogoProps) {
  const logo = (
    <Image
      src={image}
      alt={name}
      width={140}
      height={50}
      className="
        h-10 w-auto object-contain
        opacity-100 grayscale-0
        transition-all duration-300
        md:grayscale md:opacity-60
        md:group-hover:grayscale-0 md:group-hover:opacity-100
      "
    />
  );

  if (!href || href === "#") {
    return logo;
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex"
    >
      {logo}
    </Link>
  );
}