import React, { ReactNode } from "react";
import { Heading } from "@silva-school-frontend/ui";
export type ViewHeaderProps = {
  title: ReactNode;
};
export function ViewHeader({ title }: ViewHeaderProps) {
  return (
    <div className="viewheader">
      <Heading underline type="2">
        {title}
      </Heading>
    </div>
  );
}
