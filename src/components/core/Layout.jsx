import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title && `${title} - `}Wen Ting Wang</title>
        <meta
          name="description"
          content="Wen Ting Wang, software engineer at Made Tech, based in London, UK."
        ></meta>
        <meta name="theme-color" content="#eac435" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/icons/icon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/icons/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/icon-16x16.png"
        />
      </Head>
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Navbar />
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}
