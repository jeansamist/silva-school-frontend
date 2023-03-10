import { useState, useCallback, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export function useConfig()  {
  const [adminExist, setadminExist] = useState(false);
  const [schoolExist, setschoolExist] = useState(false);

  useEffect(() => {
    configAdmin()
    configSchool()
  }, [])

  const configAdmin = useCallback(() => {
    setadminExist(false);
  }, []);

  const configSchool = useCallback(() => {
    setschoolExist(false);
  }, []);
  const isConfig = useCallback((): boolean => {
    return adminExist === true && schoolExist === true
  }, [adminExist, schoolExist]);
  return { adminExist, schoolExist, configAdmin, configSchool, isConfig };
}

export default useConfig;
