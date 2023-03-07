import React, { PropsWithChildren, FunctionComponent, MouseEvent, ReactNode } from "react";
import { Box } from "../Atoms/Box";
export type CardProps = PropsWithChildren<{
  className?: string;
  padding?: boolean;
  radius?: boolean;
  border?: boolean;
  shadow?: boolean;
  heading?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  onClick?: (e: MouseEvent) => void;
}>;

export const Card: FunctionComponent<CardProps> = ({
  children,
  padding = true,
  radius = true,
  border = true,
  shadow = true,
  header = null,
  footer = null,
  heading = null,
  onClick = () => {
    return;
  },
  className = "",
}) => {
  return (
    <Box
      radius={radius}
      border={border}
      onClick={onClick}
      className={`card${border ? " card-border" : ""}${shadow ? " card-shadow" : ""}${radius ? " card-radius" : ""}${padding ? " card-padding" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {header && <div className="card-header">{header}</div>}
      <Box padding={padding} className="card-content">
        {heading && <div className="card-heading">{heading}</div>}
        {children}
      </Box>
      {footer && <div className="card-footer">{footer}</div>}
    </Box>
  );
};
