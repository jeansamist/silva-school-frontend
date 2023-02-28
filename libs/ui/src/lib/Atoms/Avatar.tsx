import React, { FunctionComponent } from "react";
import avatarDefault from "./../../assets/images/avatars/avatar (1).png";
export type AvatarProps = {
  size?: string;
  image?: string;
  disabled?: boolean;
  className?: string;
};

export const Avatar: FunctionComponent<AvatarProps> = ({ size = "medium", image = avatarDefault, disabled = false, className = "" }) => {
  return (
    <div className={`avatar avatar-${size}${disabled ? " avatar-disabled" : ""}${className ? ` ${className}` : ""}`}>
      <img src={image} alt="avatar" />
    </div>
  );
};
