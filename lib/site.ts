export const siteConfig = {
  name: "FavDoctor",
  shortName: "FavDoctor",

  description:
    "FavDoctor builds healthcare technology and implementation solutions to address real healthcare challenges across Nigeria.",

  url: "https://fav.doctor",

  ogImage: "/images/og-image.jpg",
} as const;

export type SiteConfig = typeof siteConfig;