import React from "react";
import "./styles.css";
import { FlagBagProvider } from "@happykit/flags/context";
import { useFlags } from "../../flags/client";

export default function CustomApp({ Component, pageProps }) {
  const flagBag = useFlags();

  return (
    <FlagBagProvider value={flagBag}>
      <Component {...pageProps} />
    </FlagBagProvider>
  );
}
