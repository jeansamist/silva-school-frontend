import { Alert as AlertElement } from "@silva-school-frontend/ui";
import { ComponentProps, FunctionComponent, PropsWithChildren, createContext, useCallback, useState } from "react";

type Alert = ComponentProps<typeof AlertElement>;

type _def = {
  alerts: Alert[];
  pushAlert: (alert: Alert) => void;
};

const def: _def = {
  alerts: [],
  pushAlert: () => {
    return;
  },
};

function useAlert(): _def {
  const [alerts, setalerts] = useState<Alert[]>([]);
  const pushAlert = useCallback((alert: Alert) => {
    setalerts((v) => [...v, alert]);
  }, []);
  return { alerts, pushAlert };
}

export const AlertContext = createContext(def);

export const AlertProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const alert = useAlert();
  return <AlertContext.Provider value={alert}>{children}</AlertContext.Provider>;
};
