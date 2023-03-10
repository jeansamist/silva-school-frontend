import React, { PropsWithChildren, FunctionComponent } from "react";

export type DatePickerFieldProps = PropsWithChildren<{
  className?: string;
}>;

export const DatePickerField: FunctionComponent<DatePickerFieldProps> = ({ children, className = "" }) => {
  return (
    <div className={`datepickerfield${className ? ` ${className}` : ""}`}>
      DatePickerField
      {children}
    </div>
  );
};
