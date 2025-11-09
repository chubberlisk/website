import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DefaultSeo } from "next-seo";
import { DM_Sans } from "next/font/google";
import SEO from "../next-seo.config";
import "./styles.css";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <main className={dmSans.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
