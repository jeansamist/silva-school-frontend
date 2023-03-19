import { useLoading } from "@silva-school-frontend/hooks";
// import { User } from "@silva-school-frontend/models";
import React, { FunctionComponent, createContext, PropsWithChildren, Dispatch, SetStateAction } from "react";
type _def = {
  isAuthLoading: boolean;
  isConfLoading: boolean;
  setisAuthLoading: Dispatch<SetStateAction<boolean>>;
  setisConfLoading: Dispatch<SetStateAction<boolean>>;
  appIsReady: () => boolean;
};

const def: _def = {
  isAuthLoading: false,
  isConfLoading: false,
  appIsReady: () => false,
  setisAuthLoading: () => false,
  setisConfLoading: () => false,
};
export const LoadingContext = createContext(def);

export const LoadingProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const loading = useLoading();
  return <LoadingContext.Provider value={loading}>{children}</LoadingContext.Provider>;
};
