import React, { ChangeEvent, FunctionComponent, ReactNode, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { Control, Controller, UseControllerProps, ControllerRenderProps, FieldValues } from "react-hook-form";
export type FieldProps = {
  label: ReactNode;
  type?: string;
  leftIcon?: IconType | null;
  rightIcon?: IconType | null;
  onChange?: (newValue: string, e: ChangeEvent) => void;
  valid?: boolean;
  activated?: boolean;
  defaultValue?: string | number;
  size?: string;
  disabled?: boolean;
  className?: string;
  error?: ReactNode;
  field?: object;
};
export const Field: FunctionComponent<FieldProps> = ({
  label = "label",
  type = "text",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onChange = () => {
    return;
  },
  valid = false,
  activated = false,
  defaultValue = "",
  size = "medium",
  disabled = false,
  className = "",
  error = "",
  field = {},
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
    <div
      {...field}
      className={`field ${active ? "active " : ""}${isValid ? "valid " : ""}field-${type} field-${size}${disabled ? " field-disabled" : ""}${
        type === "date" ? " field-date" : ""
      }${error ? " field-error" : ""}${className ? ` ${className}` : ""}`}
    >
      {LeftIcon && (
        <div className="field-icon left-icon lh-0">
          <LeftIcon />
        </div>
      )}
      <div className={`input-container${RightIcon ? "" : " pr-3"}${LeftIcon ? "" : " pl-3"}`}>
        <input disabled={disabled} type={type} value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
        <label className={`${LeftIcon ? "" : "no-left"}`}>{label}</label>
      </div>
      {RightIcon && (
        <div className="field-icon right-icon lh-0">
          <RightIcon />
        </div>
      )}
      {error && <span className="field-error-text">{error}</span>}
    </div>
  );
};
export type FieldControlledProps = UseControllerProps & FieldProps;
export function FieldControlled(props: FieldControlledProps) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      render={({ field, fieldState }) => {
        return <Field {...{ ...props, field, error: fieldState.error?.message }} />;
      }}
    />
  );
}
