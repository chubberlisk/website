import React from "react";

const Footer = () => (
  <footer className="bg-black p-5">
    <div className="container">
      <div className="text-xs md:text-sm text-center">
        © {new Date().getFullYear()} Copyright: Wen Ting Wang
      </div>
    </div>
  </footer>
);

export default Footer;
