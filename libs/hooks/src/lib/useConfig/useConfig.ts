import { AxiosError } from "axios";
import { useState, useCallback, useEffect } from "react";
import { School, User } from "@silva-school-frontend/models";
import useApi from "../useApi/useApi";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export function useConfig() {
  const [adminExist, setadminExist] = useState(false);
  const [schoolExist, setschoolExist] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);
  const { api } = useApi();

  useEffect(() => {
    api
      .get("/config")
      .then((response) => {
        const config: {
          admin_exist: boolean;
          school_exist: boolean;
        } = response.data;
        setadminExist(config.admin_exist);
        setschoolExist(config.school_exist);
        setisLoaded(true);
      })
      .catch();
  }, []);

  const configAdmin = useCallback(async (data: User): Promise<User | AxiosError> => {
    try {
      const response = await api.post("/user", data, {
        headers: {
          "Action-Name": "config",
        },
      });
      const user: User = response.data;
      setadminExist(true);
      return user;
    } catch (reason) {
      const error = reason as AxiosError;
      return error;
    }
    // .catch((reason) => {
    //   const error = reason as AxiosError;
    //   const data = error.response?.data as object
    //   return new Promise<object>((resolve) => {
    //     resolve(data);
    //   });
    // });
  }, []);

  const configSchool = useCallback((data: School) => {
    api
      .post("/school", data, {
        headers: {
          "Action-Name": "config",
        },
      })
      .then(() => {
        setschoolExist(true);
      });
  }, []);
  const isConfig = useCallback((): boolean => {
    return adminExist === true && schoolExist === true;
  }, [adminExist, schoolExist]);
  return { adminExist, schoolExist, configAdmin, configSchool, isConfig, isLoaded };
}

export default useConfig;
