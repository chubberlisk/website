import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="flex items-center justify-between flex-wrap min-h-screen-10">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/">
            <>
              <Logo
                cropped={true}
                height="75px"
                width="75px"
                backgroundColor="bg-wtw-black"
                textColor="text-wtw-yellow"
              />
            </>
          </Link>
        </div>
        <div className="block">
          <Link
            href="/#about-me"
            className="inline-block mr-5 md:mr-10 text-wtw-white"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="inline-block mr-5 md:mr-10 text-wtw-white"
          >
            Blog
          </Link>
          <Link
            href="/writings"
            className="inline-block mr-5 md:mr-10 text-wtw-white"
          >
            Writings
          </Link>
          <Link
            href="/paintings"
            className="inline-block mr-5 md:mr-10 text-wtw-white"
          >
            Paintings
          </Link>
          <Link href="/#contact-me" className="inline-block text-wtw-white">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
