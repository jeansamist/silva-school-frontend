import React, { PropsWithChildren, FunctionComponent, useState, MouseEvent } from "react";
import { IconType } from "react-icons";
import { Card } from "./Card";
import { Heading } from "../Atoms/Heading";
import { Flexbox } from "./../Containers/Flexbox";
import { Paragraph } from "../Atoms/Paragraph";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertTriangle, FiX } from "react-icons/fi";
export type AlertProps = PropsWithChildren<{
  className?: string;
  type?: string;
  icon?: IconType | null;
  title?: string;
  onClick?: (e?: MouseEvent) => void;
  onClose?: (e?: MouseEvent) => void;
}>;

export const Alert: FunctionComponent<AlertProps> = ({
  type = "primary",
  icon: Ico,
  children,
  title = "Alert",
  onClick = () => {
    return;
  },
  onClose = () => {
    return;
  },
  className = "",
}) => {
  const [visible, setvisible] = useState(true);
  function handleClick(e: MouseEvent) {
    onClick(e);
  }
  function handleClose(e: MouseEvent) {
    onClose(e);
    setvisible(false);
  }
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div initial={{ x: "-100%", opacity: 0 }} animate={{ x: "0em", opacity: 1 }} exit={{ x: "100%", opacity: 0 }}>
          <Card className={`alert alert-${type}${className ? ` ${className}` : ""}`} onClick={handleClick}>
            <Flexbox gap className="aic">
              <div className="alert-icon">{Ico ? <Ico size={50} className="flex lh-0" /> : <FiAlertTriangle size={50} className="flex lh-0" />}</div>
              <div className="alert-data">
                <Heading type="3">{title}</Heading>
                <Paragraph>{children}</Paragraph>
              </div>
            </Flexbox>
            <div className="close" onClick={handleClose}>
              <FiX size={25} className="flex lh-0" />
            </div>
          </Card>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};
