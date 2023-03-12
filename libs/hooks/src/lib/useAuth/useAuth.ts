import { backendAxiosInstance } from "@silva-school-frontend/functions";
import { User } from "@silva-school-frontend/models";
import { useState, useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export function useAuth() {
  const [user] = useState<User>();
  const login = useCallback(async (data: {
    username?: string;
    password?: string
  }) => {
    console.log("context");
    const response = await backendAxiosInstance.post('/auth/login', data)
    const responseData: {
      access?: string;
      refresh?: string;
      expire?: string;
    } = response.data
    localStorage.setItem('authTokens', JSON.stringify(responseData))
  }, []);
  return { user, login };
}

export default useAuth;
