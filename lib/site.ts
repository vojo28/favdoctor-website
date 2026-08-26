export const siteConfig = {
  name: "FavDoctor",
  shortName: "FavDoctor",

  description:
    "",

  url: "https://fav.doctor",

  ogImage: "/images/og-image.jpg",
} as const;

export type SiteConfig = typeof siteConfig;