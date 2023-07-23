import React from "react";

export default function Tag({ tag }) {
  return (
    <span
      className="flex-shrink rounded-lg bg-gradient-to-r from-wtw-yellow to-wtw-orange text-wtw-black px-3 font-semibold mr-2 mb-1"
      key={tag}
    >
      {tag}
    </span>
  );
}
