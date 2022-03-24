import React from "react";
import classNames from "classnames";

export default function Section({
  id,
  backgroundColor = "bg-wtw-black",
  minHeight = "min-h-screen",
  className,
  children,
}) {
  return (
    <section
      id={id}
      className={classNames(
        "flex flex-col justify-center py-8 md:py-5",
        backgroundColor,
        minHeight,
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}
