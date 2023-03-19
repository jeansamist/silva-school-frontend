import { useAuth } from "@silva-school-frontend/hooks";
import { User } from "@silva-school-frontend/models";
import { config } from "process";
import React, { FunctionComponent, createContext, PropsWithChildren, useContext, useEffect } from "react";
import { LoadingContext } from "./LoadingContext";
type _def = {
  user?: User | false;
  isLoaded: boolean;
  login: (data: { username?: string; password?: string }) => Promise<boolean | { detail?: string }>;
  authentificate: () => Promise<boolean>;
};

const def: _def = {
  isLoaded: false,
  login: () => {
    return new Promise(() => false);
  },
  authentificate: () => {
    return new Promise(() => false);
  },
};
export const AuthContext = createContext(def);

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
