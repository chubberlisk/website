import React from "react";

export default function Logo({
  cropped = false,
  backgroundColor = "bg-wtw-yellow",
  textColor = "text-wtw-black",
  height = "100px",
  width = "100px",
}) {
  if (cropped) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width={width}
        height={height}
        viewBox="0 0 1500.000000 1500.000000"
        preserveAspectRatio="xMidYMid meet"
        className={`fill-current stroke-current ${backgroundColor} ${textColor}`}
      >
        <g transform="translate(0.000000,1500.000000) scale(0.100000,-0.100000)">
          <path d="M600 9705 c0 -5 321 -562 1882 -3265 196 -338 429 -743 519 -899 90 -156 169 -283 174 -283 16 3 899 1535 899 1562 1 20 -970 1716 -1601 2798 l-54 92 -909 0 c-501 0 -910 -2 -910 -5z" />
          <path d="M12527 9618 c-30 -51 -400 -691 -822 -1423 -422 -731 -773 -1339 -780 -1351 -12 -19 28 -91 440 -805 249 -431 457 -783 461 -782 5 1 115 185 245 410 1450 2510 2329 4034 2329 4038 0 3 -409 5 -910 5 l-909 0 -54 -92z" />
          <path d="M6920 6790 l0 -1550 583 2 582 3 3 1548 2 1547 -585 0 -585 0 0 -1550z" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width={width}
      height={height}
      viewBox="60 529 1380 447"
      preserveAspectRatio="xMidYMid meet"
      className={`fill-current stroke-current ${backgroundColor} ${textColor}`}
    >
      <g transform="translate(0.000000,1500.000000) scale(0.100000,-0.100000)">
        <path d="M600 9705 c0 -5 321 -562 1882 -3265 196 -338 429 -743 519 -899 90 -156 169 -283 174 -283 16 3 899 1535 899 1562 1 20 -970 1716 -1601 2798 l-54 92 -909 0 c-501 0 -910 -2 -910 -5z" />
        <path d="M12527 9618 c-30 -51 -400 -691 -822 -1423 -422 -731 -773 -1339 -780 -1351 -12 -19 28 -91 440 -805 249 -431 457 -783 461 -782 5 1 115 185 245 410 1450 2510 2329 4034 2329 4038 0 3 -409 5 -910 5 l-909 0 -54 -92z" />
        <path d="M6920 6790 l0 -1550 583 2 582 3 3 1548 2 1547 -585 0 -585 0 0 -1550z" />
      </g>
    </svg>
  );
}
