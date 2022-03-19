import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useFlags } from "@happykit/flags/client";

const Navbar = () => {
  const { flags } = useFlags();

  return (
    <div className="container">
      <nav className="flex items-center justify-between flex-wrap h-screen-10">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/">
            <a>
              <Logo
                cropped={true}
                height="75px"
                width="75px"
                backgroundColor="bg-wtw-black"
                textColor="text-wtw-yellow"
              />
            </a>
          </Link>
        </div>
        <div className="block">
          <Link href="/#about-me">
            <a className="inline-block mr-5 md:mr-10 text-wtw-white">About</a>
          </Link>
          {flags?.enableBlog && (
            <Link href="/blog">
              <a className="inline-block mr-5 md:mr-10 text-wtw-white">Blog</a>
            </Link>
          )}
          <Link href="/#paintings">
            <a className="inline-block mr-5 md:mr-10 text-wtw-white">
              Paintings
            </a>
          </Link>
          <Link href="/#contact-me">
            <a className="inline-block text-wtw-white">Contact</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
