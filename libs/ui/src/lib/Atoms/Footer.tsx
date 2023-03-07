import React, { PropsWithChildren, FunctionComponent } from "react";

export type FooterProps = PropsWithChildren<{
  className?: string;
}>;

export const Footer: FunctionComponent<FooterProps> = ({ children, className = "" }) => {
  return <div className={`footer${className ? ` ${className}` : ""}`}>{children}</div>;
};
