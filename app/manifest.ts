import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FavDoctor",
    short_name: "FavDoctor",

    description:
      "FavDoctor builds solutions that improve healthcare through technology, research, and strategic partnerships.",

    start_url: "/",
    display: "standalone",

    background_color: "#ffffff",
    theme_color: "#174f93",

    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}