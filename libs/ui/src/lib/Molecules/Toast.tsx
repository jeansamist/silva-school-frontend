import React, { PropsWithChildren, FunctionComponent, useState, useEffect, MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flexbox } from "../Containers/Flexbox";
import { Card } from "./Card";
export type ToastProps = PropsWithChildren<{
  className?: string;
  type?: string;
  onClick?: (e: MouseEvent) => void;
  duration?: number;
}>;

export const Toast: FunctionComponent<ToastProps> = ({
  children,
  type = "primary",
  className = "",
  onClick = () => {
    return;
  },
  duration = 5000,
}) => {
  const [visible, setvisible] = useState(true);
  const [timerpause, settimerpause] = useState(false);
  useEffect(() => {
    if (visible && !timerpause) {
      const i = setTimeout(() => {
        setvisible(false);
      }, duration);
      return () => {
        clearInterval(i);
      };
    }
  }, [timerpause, duration, visible]);

  function onHover() {
    settimerpause(true);
  }
  function onLeave() {
    settimerpause(false);
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0em", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          onClick={(e: MouseEvent) => onClick(e)}
          onHoverStart={onHover}
          onHoverEnd={onLeave}
        >
          <Card className={`toast toast-${type}${className ? ` ${className}` : ""}`} border={false}>
            <Flexbox className="aic" gap>
              <div className="toast-icon">{/* <FiBell size={20} className="flex lh-0" /> */}</div>
              {children}
            </Flexbox>
          </Card>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};
