import React, { FunctionComponent, useState, useEffect, ChangeEvent, MouseEvent } from "react";

export type RadioProps = {
  id?: string;
  size?: string;
  actived?: boolean;
  onChange?: (newValue: boolean, e: ChangeEvent) => void;
  onClick?: (val: any) => void;
  disabled?: boolean;
  className?: string;
  name?: string;
  value?: any;
};

export const Radio: FunctionComponent<RadioProps> = ({
  id = "id-" + Math.random() * Math.random() * 100,
  size = "medium",
  actived = false,
  onChange = () => {
    return;
  },
  disabled = false,
  className = null,
  name = "",
  value = "",
  onClick = () => {
    return;
  },
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
  const handleClick = (e: MouseEvent) => {
    onClick(value);
  };
  return (
    <div className={`radio radio-${size}${disabled ? " radio-disabled" : ""}${className ? ` ${className}` : ""}`}>
      <input type="radio" checked={checked} name={name} onChange={handleChange} onClick={handleClick} id={id} />
      <label htmlFor={id}></label>
    </div>
  );
};
