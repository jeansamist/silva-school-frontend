
import { useState, useCallback, useEffect } from "react";
import { School, User } from "@silva-school-frontend/models";
import { backendAxiosInstance } from "@silva-school-frontend/functions";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export function useConfig()  {
  const [adminExist, setadminExist] = useState(false);
  const [schoolExist, setschoolExist] = useState(false);

  useEffect(() => {
    backendAxiosInstance.get('/config').then((response) => {
      const config: {
        admin_exist: boolean,
        school_exist: boolean
      } = response.data;
      setadminExist(config.admin_exist)
      setschoolExist(config.school_exist)
    })
  }, [])

  const configAdmin = useCallback((data: User) => {
    backendAxiosInstance.post('/user', data, {
      headers: {
        'Action-Name': 'config'
      }
    }).then(() => {
      setadminExist(true)
    })
  }, []);

  const configSchool = useCallback((data: School) => {
    backendAxiosInstance.post('/school', data, {
      headers: {
        'Action-Name': 'config'
      }
    }).then(() => {
      setschoolExist(true)
    })
  }, []);
  const isConfig = useCallback((): boolean => {
    return adminExist === true && schoolExist === true
  }, [adminExist, schoolExist]);
  return { adminExist, schoolExist, configAdmin, configSchool, isConfig };
}

export default useConfig;
