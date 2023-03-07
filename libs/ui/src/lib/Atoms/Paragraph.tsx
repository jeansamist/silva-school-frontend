import React, { PropsWithChildren, FunctionComponent } from "react";

export type ParagraphProps = PropsWithChildren<{
  quote?: boolean;
  padding?: boolean;
  type?: string;
  className?: string;
}>;

export const Paragraph: FunctionComponent<ParagraphProps> = ({ quote = false, padding = false, type = "1", className = "", children }) => {
  return (
    <div
      className={`paragraph paragraph-${type}${quote ? ` paragraph-quote` : ""}${padding ? ` paragraph-padding` : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
};
