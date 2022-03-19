import React from "react";
import "./styles.css";
import "../../flags.config";

export default function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
