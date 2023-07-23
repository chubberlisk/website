import React from "react";
import "../pages/styles.css";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <Navbar />
        <main id="content" className={dmSans.className}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    template: "%s - Wen Ting Wang",
    default: "Wen Ting Wang",
  },
  description:
    "Wen Ting Wang, software engineer at Made Tech, based in London, UK.",
  themeColor: "#eac435",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        type: "image/png",
        url: "/images/icons/icon-512x512.png",
        sizes: "512x512",
      },
      {
        type: "image/png",
        url: "/images/icons/icon-192x192.png",
        sizes: "192x192",
      },
      {
        type: "image/png",
        url: "/images/icons/icon-32x32.png",
        sizes: "32x32",
      },
      {
        type: "image/png",
        url: "/images/icons/icon-16x16.png",
        sizes: "16x16",
      },
    ],
    apple: [{ url: "/images/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};
