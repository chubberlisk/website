import React from "react";
import classNames from "classnames";

export default function Text({ className, children }) {
  return <div className={classNames("md:w-3/4", className)}>{children}</div>;
}
