import React, { FunctionComponent, MouseEvent, PropsWithChildren, ReactNode } from "react";
import { IconType } from "react-icons";
export type ButtonProps = PropsWithChildren<{
  type?: string;
  leftIcon?: IconType | null;
  rightIcon?: IconType | null;
  size?: string;
  label?: ReactNode;
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
  className?: string;
}>;
export const Button: FunctionComponent<ButtonProps> = ({
  type = "primary",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  size = "medium",
  label = null,
  children = null,
  onClick = () => {
    return;
  },
  disabled = false,
  className = "",
}) => {
  function handdleClick(e: MouseEvent) {
    if (!disabled) {
      onClick(e);
    }
  }
  return (
    <button className={`btn btn-${type} btn-${size}${disabled ? " btn-disabled" : ""}${className ? ` ${className}` : ""}`} onClick={handdleClick}>
      <div className={`flex ${(label || children) && type === "large" ? " jcc " : " jcsa "} aic${label || children ? " flex-gap" : ""}`}>
        {LeftIcon && (
          <div className="left-icon lh-0">
            <LeftIcon />
          </div>
        )}
        {label ? <div className="content">{label}</div> : children ? <div className="content">{children}</div> : ""}
        {RightIcon && (
          <div className="right-icon lh-0">
            <RightIcon />
          </div>
        )}
      </div>
    </button>
  );
};
