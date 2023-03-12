import { useAuth } from "@silva-school-frontend/hooks";
import { User } from "@silva-school-frontend/models";
import React, { FunctionComponent, createContext, PropsWithChildren } from "react";
type _def = {
  user?: User;
  login: (data: { username?: string; password?: string }) => void;
};

const def: _def = {
  login: () => {
    console.log("login");
    return;
  },
};
export const AuthContext = createContext(def);

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
