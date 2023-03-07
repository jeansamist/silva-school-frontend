import React, { PropsWithChildren, FunctionComponent, useState, ReactNode, MouseEvent } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";
export class DropdownElement {
  constructor(
    public to: string = "/",
    public icon: IconType = FaPencilAlt,
    public label: ReactNode = "Dropdown element",
    public type: string = "button",
    public onClick: (e: MouseEvent) => void
  ) {}
}
export type DropdownProps = PropsWithChildren<{
  className?: string;
  position?: string;
  elements?: DropdownElement[];
}>;

export const Dropdown: FunctionComponent<DropdownProps> = ({
  elements = [
    new DropdownElement("#", FaPencilAlt, "Dropdown", "button", () => {
      return;
    }),
  ],
  children = "Dropdown",
  position = "left",
  className = "",
}) => {
  const [active, setactive] = useState(false);
  return (
    <div
      tabIndex={1}
      onBlur={() => setactive(false)}
      className={`dropdown-container dropdown-position-${position === "left" ? `left` : "right"}${className ? ` ${className}` : ""}`}
    >
      <div className="dropdown-label" onClick={() => setactive(!active)}>
        {children}
      </div>
      <AnimatePresence>
        {active ? (
          <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="dropdown">
            {elements.map((element, key) => (
              <DropdownElementJSX
                key={key}
                {...{
                  ...element,
                  onClick: (e: MouseEvent) => {
                    element.onClick(e);
                    setactive(false);
                  },
                }}
              />
            ))}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};
function DropdownElementJSX({
  to = "#",
  type = "button",
  icon: Ico,
  label = "Dropdown",
  onClick = () => {
    return;
  },
}: DropdownElement) {
  if (type === "link") {
    return (
      <Link to={to} onClick={onClick} className="dropdown-element">
        <div className="ico">
          <Ico />
        </div>
        <div className="label">{label}</div>
      </Link>
    );
  }
  return (
    <div onClick={onClick} className="dropdown-element">
      <div className="ico">
        <Ico />
      </div>
      <div className="label">{label}</div>
    </div>
  );
}
