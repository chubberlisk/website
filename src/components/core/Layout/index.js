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
    </Head>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
