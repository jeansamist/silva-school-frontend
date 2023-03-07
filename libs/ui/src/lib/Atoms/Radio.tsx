import React, { FunctionComponent, useState, useEffect, ChangeEvent } from "react";

export type RadioProps = {
  id?: string;
  size?: string;
  actived?: boolean;
  onChange?: (newValue: boolean, e: ChangeEvent) => void;
  disabled?: boolean;
  className?: string;
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
    <div className={`radio radio-${size}${disabled ? " radio-disabled" : ""}${className ? ` ${className}` : ""}`}>
      <input type="radio" checked={checked} onChange={handleChange} id={id} />
      <label htmlFor={id}></label>
    </div>
  );
};
