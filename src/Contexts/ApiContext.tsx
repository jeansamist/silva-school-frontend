import { TokenType, useApi } from "@silva-school-frontend/hooks";
import axios, { AxiosInstance } from "axios";
import { Dispatch, FunctionComponent, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react";

type _def = {
  tokens?: TokenType;
  api: AxiosInstance;
  settokens?: Dispatch<SetStateAction<TokenType>>;
  API_BAKEND_URL: string;
  BAKEND_URL: string;
};

const def: _def = {
  api: axios,
  API_BAKEND_URL: "",
  BAKEND_URL: "",
};

export const ApiContext = createContext(def);
export const ApiProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [tokens] = useState<TokenType>();
  function getTokens() {
    const _tokens = localStorage.getItem("authTokens");
    return _tokens ? JSON.parse(_tokens) : undefined;
  }
  const api = useApi(tokens);
  useEffect(() => {
    api.settokens(getTokens());
  }, []);

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};
