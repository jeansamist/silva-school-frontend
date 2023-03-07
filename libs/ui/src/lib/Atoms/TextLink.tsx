import React, { PropsWithChildren, FunctionComponent } from "react";

export type TextLinkProps = PropsWithChildren<{
  size?: string;
  href?: string;
  className?: string;
}>;

export const TextLink: FunctionComponent<TextLinkProps> = ({ size = "medium", href = "/", children, className = "" }) => {
  return (
    <a href={href} className={`textlink textlink-${size}${className ? ` ${className}` : ""}`}>
      {children}
    </a>
  );
};
