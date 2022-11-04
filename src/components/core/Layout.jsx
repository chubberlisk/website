import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Navbar />
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}
