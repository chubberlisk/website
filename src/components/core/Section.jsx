import React from "react";
import classNames from "classnames";

const Section = ({
  id,
  backgroundColor = "bg-wtw-black",
  minHeight = "min-h-screen",
  className,
  children,
}) => (
  <section
    id={id}
    className={classNames(
      "flex flex-col justify-center py-8 md:py-5",
      backgroundColor,
      minHeight,
      className
    )}
  >
    {children}
  </section>
);

export default Section;