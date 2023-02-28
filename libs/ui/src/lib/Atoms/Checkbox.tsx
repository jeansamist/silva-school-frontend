import React, { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
export type CheckboxProps = {
  id?: string;
  size?: string;
  actived?: boolean;
  onChange?: (checked: boolean, e: ChangeEvent) => void;
  disabled?: boolean;
  className?: string;
};
export const Checkbox: FunctionComponent<CheckboxProps> = ({
  id = "id-" + Math.random() * Math.random() * 100,
  size = "medium",
  actived = false,
  onChange = () => {
    return;
  },
  disabled = false,
  className = "",
}) => {
  const [checked, setchecked] = useState<boolean>(false);
  useEffect(() => {
    if (actived) setchecked(true);
  }, [actived]);

  const handleChange = (e: ChangeEvent) => {
    if (!disabled) {
      setchecked(!checked);
      onChange(!checked, e);
    }
  };
  return (
    <div className={`checkbox checkbox-${size}${disabled ? " checkbox-disabled" : ""}${className ? ` ${className}` : ""}`}>
      <input type="checkbox" checked={checked} onChange={handleChange} id={id} />
      <label htmlFor={id}></label>
    </div>
  );
};
