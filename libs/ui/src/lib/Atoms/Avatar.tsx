import React from "react";
import avatarDefault from "./../../assets/images/avatars/avatar (1).png";
export interface AvatarProps {
  size?: string;
  image?: string;
  disabled?: boolean;
  className?: string;
}

export function Avatar({ size = "medium", image = avatarDefault, disabled = false, className = "" }: AvatarProps) {
  return (
    <div className={`avatar avatar-${size}${disabled ? " avatar-disabled" : ""}${className ? ` ${className}` : ""}`}>
      <img src={image} alt="avatar" />
    </div>
  );
}

export default Avatar;
