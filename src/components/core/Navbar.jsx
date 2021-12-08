import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => (
  <div className="container">
    <nav className="flex items-center justify-between flex-wrap h-screen-10">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Logo
          cropped={true}
          height="75px"
          width="75px"
          backgroundColor="bg-wtw-black"
          textColor="text-wtw-yellow"
        />
      </div>
      <div className="block">
        <Link href="/#about-me">
          <a className="inline-block mr-5 md:mr-10 text-wtw-white">About</a>
        </Link>
        <Link href="/#paintings">
          <a className="inline-block mr-5 md:mr-10 text-wtw-white">Paintings</a>
        </Link>
        <Link href="/#contact-me">
          <a className="inline-block text-wtw-white">Contact</a>
        </Link>
      </div>
    </nav>
  </div>
);

export default Navbar;
