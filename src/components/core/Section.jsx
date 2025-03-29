import React from "react";
import classNames from "classnames";

export default function Section({
  id,
  backgroundColor = "bg-wtw-black",
  minHeight = "min-h-screen",
  className,
  children,
  padding = "py-5",
}) {
  return (
    <section
      id={id}
      className={classNames(
        `flex flex-col justify-center ${padding}`,
        backgroundColor,
        minHeight,
        className,
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}
