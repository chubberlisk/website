import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black p-5">
      <div className="container">
        <div className="text-xs md:text-sm text-center">
          © {new Date().getFullYear()} Copyright: Wen Ting Wang
        </div>
      </div>
    </footer>
  );
}
