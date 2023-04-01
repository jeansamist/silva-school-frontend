import { useConfig } from "@silva-school-frontend/hooks";
import { School, User } from "@silva-school-frontend/models";
import { AxiosError } from "axios";
import { FunctionComponent, PropsWithChildren, createContext } from "react";

type _def = {
  adminExist: boolean;
  schoolExist: boolean;
  isLoaded: boolean;
  configAdmin: (data: User) => Promise<User | AxiosError>;
  configSchool: (data: School) => void;
  isConfig: () => boolean;
};

const def: _def = {
  adminExist: false,
  schoolExist: false,
  isLoaded: false,
  configAdmin: () => {
    return Promise.resolve(new User());
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
