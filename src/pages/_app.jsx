import React from "react";
import { FlagBagProvider } from "@happykit/flags/context";
import { useFlags } from "../../flags/client";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import "./styles.css";

export default function CustomApp({ Component, pageProps }) {
  const flagBag = useFlags();

  return (
    <FlagBagProvider value={flagBag}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </FlagBagProvider>
  );
}
