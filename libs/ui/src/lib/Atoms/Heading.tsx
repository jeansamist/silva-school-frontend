import React, { PropsWithChildren, FunctionComponent } from "react";

export type HeadingProps = PropsWithChildren<{
  type?: string;
  underline?: boolean;
  className?: string;
}>;

export const Heading: FunctionComponent<HeadingProps> = ({ type = "h1", underline = false, children, className = "" }) => {
  return <div className={`heading heading-${type}${underline ? ` heading-underline` : ""}${className ? ` ${className}` : ""}`}>{children}</div>;
};
