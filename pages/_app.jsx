import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { FlagBagProvider } from "@happykit/flags/context";
import { useFlags } from "@/flags/client";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "./styles.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function CustomApp({ Component, pageProps }) {
  const flagBag = useFlags();

  return (
    <FlagBagProvider value={flagBag}>
      <DefaultSeo {...SEO} />
      <main className={dmSans.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </FlagBagProvider>
  );
}
