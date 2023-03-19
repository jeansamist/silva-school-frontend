import { useState, useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export function useLoading() {
  const [isAuthLoading, setisAuthLoading] = useState<boolean>(false);
  const [isConfLoading, setisConfLoading] = useState<boolean>(false);
  const appIsReady = useCallback((): boolean => {
    return isAuthLoading && isConfLoading;
  }, [isAuthLoading, isConfLoading]);
  return { isAuthLoading, isConfLoading, setisAuthLoading, setisConfLoading, appIsReady };
}

export default useLoading;
