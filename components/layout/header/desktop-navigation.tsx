import { navigation } from "@/data/navigation";

import { NavigationLink } from "./navigation-link";

export function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <NavigationLink
          key={item.label}
          href={item.href}
          label={item.label}
        />
      ))}
    </nav>
  );
}