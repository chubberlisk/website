import React from "react";
import classNames from "classnames";
import styles from "./index.module.css";

const Section = ({
  id,
  backgroundColor = "bg-wtw-yellow",
  className,
  children,
}) => (
  <section
    id={id}
    className={classNames(styles.section, backgroundColor, className)}
  >
    {children}
  </section>
);

export default Section;
