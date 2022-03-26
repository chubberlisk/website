import React from "react";
import "./styles.css";
import "../../flags.config";
import { FlagBagProvider } from "@happykit/flags/context";
import { useFlags } from "@happykit/flags/client";

export default function CustomApp({ Component, pageProps }) {
  const flagBag = useFlags();

  return (
    <FlagBagProvider value={flagBag}>
      <Component {...pageProps} />
    </FlagBagProvider>
  );
}
