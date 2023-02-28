import React, { PropsWithChildren, MouseEvent, FunctionComponent } from "react";

export type BoxProps = PropsWithChildren<{
  padding?: boolean;
  radius?: boolean;
  border?: boolean;
  backgroundImage?: string;
  onClick?: (e: MouseEvent) => void;
  className?: string;
}>;
export const Box: FunctionComponent<BoxProps> = ({
  children,
  padding = false,
  radius = false,
  border = false,
  backgroundImage = "",
  onClick = () => {
    return;
  },
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`box${border ? " box-border" : ""}${radius ? " box-radius" : ""}${padding ? " box-padding" : ""}${className ? ` ${className}` : ""}`}
      style={{
        background: backgroundImage ? 'url("' + backgroundImage + '") no-repeat center / cover' : "var(--backgroundLight)",
      }}
    >
      <div className="box-content">{children}</div>
    </div>
  );
};
