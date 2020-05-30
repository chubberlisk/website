import React from "react";
import Head from "next/head";

const Layout = ({ title = "Wen Ting Wang", children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/icons/wtw-512x512.png" />
    </Head>
    <main>{children}</main>
  </>
);

export default Layout;
