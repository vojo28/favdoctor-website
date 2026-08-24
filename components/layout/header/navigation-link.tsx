import Link from "next/link";

interface NavigationLinkProps {
  href: string;
  label: string;
}

export function NavigationLink({
  href,
  label,
}: NavigationLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}