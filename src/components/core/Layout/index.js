import React from "react";
import Head from "next/head";
import Footer from "../Footer";

const Layout = ({ title = "Wen Ting Wang", children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="favicon.ico" />
    </Head>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
