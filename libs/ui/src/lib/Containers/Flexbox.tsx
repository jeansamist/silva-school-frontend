import React, { PropsWithChildren, FunctionComponent, CSSProperties } from "react";

export type FlexboxProps = PropsWithChildren<{
  className?: string;
  gap?: boolean;
  style?: CSSProperties;
}>;

export const Flexbox: FunctionComponent<FlexboxProps> = ({ gap = false, children, style = {}, className = "" }) => {
  return (
    <div style={{ ...style }} className={`flex${gap ? " flex-gap" : ""}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
};
