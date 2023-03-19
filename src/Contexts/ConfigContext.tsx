import { useConfig, useLoading } from "@silva-school-frontend/hooks";
import { School, User } from "@silva-school-frontend/models";
import React, { FunctionComponent, createContext, PropsWithChildren, useEffect, useContext } from "react";
import { LoadingContext } from "./LoadingContext";
import { useNavigate } from "react-router-dom";

type _def = {
  adminExist: boolean;
  schoolExist: boolean;
  isLoaded: boolean;
  configAdmin: (data: User) => void;
  configSchool: (data: School) => void;
  isConfig: () => boolean;
};

const def: _def = {
  adminExist: false,
  schoolExist: false,
  isLoaded: false,
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
