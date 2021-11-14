import React from "react";
import classNames from "classnames";

const Section = ({
  id,
  backgroundColor = "bg-wtw-black",
  height = "h-screen",
  className,
  children,
}) => (
  <section
    id={id}
    className={classNames(
      "flex flex-col justify-center p-5",
      backgroundColor,
      height,
      className
    )}
  >
    {children}
  </section>
);

export default Section;
