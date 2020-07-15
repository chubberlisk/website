import React from "react";
import Head from "next/head";
import Footer from "../Footer";

const Layout = ({ title = "Wen Ting Wang", children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Wen Ting Wang, software engineer at Made Tech, based in London, UK."
      ></meta>
      <link rel="icon" href="favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="android-chrome-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />
    </Head>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
