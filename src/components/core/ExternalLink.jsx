import React from "react";

export default function ExternalLink({ href, className, ariaLabel, children }) {
  return (
    <a href={href} aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}
