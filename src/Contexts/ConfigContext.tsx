import { useConfig } from "@silva-school-frontend/hooks";
import { School, User } from "@silva-school-frontend/models";
import React, { FunctionComponent, createContext, PropsWithChildren } from "react";

type _def = {
  adminExist: boolean;
  schoolExist: boolean;
  configAdmin: (data: User) => void;
  configSchool: (data: School) => void;
  isConfig: () => boolean;
};

const def: _def = {
  adminExist: false,
  schoolExist: false,
  configAdmin: () => {
    return;
  },
  configSchool: () => {
    return;
  },
  isConfig: () => {
    return false;
  },
};

export const ConfigContext = createContext(def);

export const ConfigProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const config = useConfig();
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};
