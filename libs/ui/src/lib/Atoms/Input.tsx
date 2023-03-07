import React, { FunctionComponent, useEffect, useState, ChangeEvent } from "react";

export type InputProps = {
  label?: string;
  type?: string;
  size?: string;
  defaultValue?: string;
  onChange?: (newValue: string, e: ChangeEvent) => void;
  valid?: boolean;
  activated?: boolean;
  disabled?: boolean;
  error?: boolean | string;
  className?: string;
};

export const Input: FunctionComponent<InputProps> = ({
  label = "label",
  type = "text",
  onChange = () => {
    return;
  },
  valid = false,
  activated = false,
  defaultValue = "",
  size = "medium",
  disabled = false,
  error = false,
  className = "",
}) => {
  const [active, setactive] = useState<boolean>(false);
  const [isValid, setisValid] = useState<boolean>(false);
  const [value, setvalue] = useState<string | number>("");
  useEffect(() => {
    setvalue(defaultValue);
    setactive(activated);
    setisValid(valid);
  }, [activated, defaultValue, valid]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (disabled) return;
    const newValue = e.currentTarget.value;
    setvalue(newValue);
    onChange(newValue, e);
  }
  function handleFocus(e: ChangeEvent<HTMLInputElement>) {
    if (disabled) return;
    setactive(true);
    setisValid(false);
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement>) {
    if (disabled) return;
    if (value === "") {
      setactive(false);
    } else {
      setactive(true);
      setisValid(true);
    }
  }
  return (
    <input
      placeholder={label}
      disabled={disabled}
      type={type}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`input ${active ? "active " : ""}${isValid ? "valid " : ""}input-${type} input-${size}${disabled ? " input-disabled" : ""}${
        error ? " input-error" : ""
      }${className ? ` ${className}` : ""}`}
    />
  );
};
