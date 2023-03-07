import React, { PropsWithChildren, FunctionComponent, CSSProperties } from "react";
export type GridProps = PropsWithChildren<{
  className?: string;
  gap?: boolean;
  columns: number;
  style?: CSSProperties;
}>;

export const Grid: FunctionComponent<GridProps> = ({ gap = true, columns = 2, children, style = {}, className = "" }) => {
  return (
    <div
      style={{ ...style, gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      className={`grid grid-${columns}${gap ? " grid-gap" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
};
