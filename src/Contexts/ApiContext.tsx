import { useApi } from "@silva-school-frontend/hooks";
import { AxiosInstance } from "axios";
import { FunctionComponent, PropsWithChildren, createContext } from "react";

type _def = {
  api?: AxiosInstance;
};

const def: _def = {};

export const ApiContext = createContext(def);
export const ApiProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  function getTokens() {
    const _tokens = localStorage.getItem("authTokens");
    return _tokens ? JSON.parse(_tokens) : null;
  }

  const { api } = useApi(getTokens());

  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>;
};
