import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Building Solutions That Make Healthcare Work Better",

  description:
    "FavDoctor builds healthcare technology and implementation solutions to address real healthcare challenges across Nigeria.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "FavDoctor | Building Solutions That Make Healthcare Work Better",

    description:
      "FavDoctor builds healthcare technology and implementation solutions to address real healthcare challenges across Nigeria.",

    url: "/",

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "FavDoctor — Building Solutions That Make Healthcare Work Better",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "FavDoctor | Building Solutions That Make Healthcare Work Better",

    description:
      "FavDoctor builds healthcare technology and implementation solutions to address real healthcare challenges across Nigeria.",

    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <main className="pt-20">
  {children}
</main>

        <Footer />
      </body>
    </html>
  );
}