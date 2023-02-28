import React, { ReactNode, PropsWithChildren, MouseEvent, FunctionComponent } from "react";
import { IconType } from "react-icons";

export type BadgeProps = PropsWithChildren<{
  type?: string;
  leftIcon?: IconType | null;
  rightIcon?: IconType | null;
  size?: string;
  label?: ReactNode;
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
  className?: string;
}>;
export const Badge: FunctionComponent<BadgeProps> = ({
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
    e.preventDefault();
    if (!disabled) {
      onClick(e);
    }
  }
  return (
    <div
      className={`badge badge-${type} badge-${size}${disabled ? " badge-disabled" : ""}${className ? ` ${className}` : ""}`}
      onClick={handdleClick}
    >
      <div className={`flex aic${label || children ? " flex-gap" : ""}${(label || children) && type === "large" ? " jcc" : " jcsa"}`}>
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
    </div>
  );
};
