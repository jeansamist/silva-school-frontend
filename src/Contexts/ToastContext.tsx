import { Toast as ToastElement } from "@silva-school-frontend/ui";
import { ComponentProps, FunctionComponent, PropsWithChildren, createContext, useCallback, useState } from "react";

type Toast = ComponentProps<typeof ToastElement>;

type _def = {
  toasts: Toast[];
  pushToast: (toast: Toast) => void;
};

const def: _def = {
  toasts: [],
  pushToast: () => {
    return;
  },
};

function useToast(): _def {
  const [toasts, settoasts] = useState<Toast[]>([
    {
      children: "Welecome ! We are happy to see you in this school 😊",
      duration: 7000,
    },
  ]);
  const pushToast = useCallback((toast: Toast) => {
    settoasts((v) => [...v, toast]);
  }, []);
  return { toasts, pushToast };
}

export const ToastContext = createContext(def);

export const ToastProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const toast = useToast();
  return <ToastContext.Provider value={toast}>{children}</ToastContext.Provider>;
};
