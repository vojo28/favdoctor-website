import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FavDoctor",
    short_name: "FavDoctor",
    description:
      "Building solutions that improve healthcare through technology, research, and strategic partnerships.",

    start_url: "/",
    display: "standalone",

    background_color: "#ffffff",
    theme_color: "#174f93",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}