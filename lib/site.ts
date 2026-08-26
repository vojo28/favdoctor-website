export const siteConfig = {
  name: "FavDoctor",
  shortName: "FavDoctor",

  description:
    "FavDoctor builds solutions that improve healthcare, helping people live longer, healthier, and better lives through technology, research, and strategic partnerships.",

  url: "https://fav.doctor",

  ogImage: "/images/og-image.jpg",
} as const;

export type SiteConfig = typeof siteConfig;