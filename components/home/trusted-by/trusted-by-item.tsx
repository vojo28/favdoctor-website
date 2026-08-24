import Image from "next/image";
import Link from "next/link";

interface TrustedByItemProps {
  name: string;
  logo: string;
  href?: string;
}

export function TrustedByItem({
  name,
  logo,
  href,
}: TrustedByItemProps) {
  const image = (
    <Image
      src={logo}
      alt={name}
      width={140}
      height={60}
      className="h-10 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
    />
  );

  if (!href) return image;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      {image}
    </Link>
  );
}