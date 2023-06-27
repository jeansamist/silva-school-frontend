import React, { ReactNode } from "react";
import { Flexbox, Heading } from "@silva-school-frontend/ui";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
export type ViewHeaderProps = {
  title: ReactNode;
  isIndex?: boolean;
  backURL?: string;
};
export function ViewHeader({ title, isIndex = false, backURL }: ViewHeaderProps) {
  return (
    <div className="viewheader">
      <Heading type="2">
        <Flexbox className="aic" gap>
          {!isIndex && (
            <Link to={backURL ? backURL : "./../../"}>
              <FiArrowLeft size={32} className="flex lh-0" />
            </Link>
          )}
          {title}
        </Flexbox>
      </Heading>
    </div>
  );
}
