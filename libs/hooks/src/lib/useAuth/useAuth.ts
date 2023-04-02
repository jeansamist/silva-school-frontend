import { TokenType } from "../useApi/useApi";
import { School, User } from "@silva-school-frontend/models";
import { useState, useCallback, useEffect } from "react";
import useApi from "../useApi/useApi";
import { AxiosError } from "axios";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export function useAuth() {
  const [user, setuser] = useState<User | false>();
  const [isLoaded, setisLoaded] = useState(false);
  const [current_school, setcurrent_school] = useState<School>();
  function getTokens() {
    const _tokens = localStorage.getItem("authTokens");
    return _tokens ? JSON.parse(_tokens) : null;
  }
  const { api, settokens, tokens } = useApi(getTokens());

  type loginDataType = {
    username?: string;
    password?: string;
  };

  const login = useCallback(async (data: loginDataType): Promise<boolean | { detail?: string }> => {
    return api
      .post("/auth/login", data)
      .then((response) => {
        const data: TokenType = response.data;

        localStorage.setItem("authTokens", JSON.stringify(data));

        settokens(data);

        return true;
      })
      .catch((reason: { response: { data: { detail?: string } } }) => {
        return reason.response.data;
      });
  }, []);

  useEffect(() => {
    authentificate();
    setisLoaded(true);
  }, [tokens]);

  const authentificate = useCallback(async (): Promise<boolean> => {
    try {
      const response = await api.get<User>("/auth/user");
      if (response.status === 200) {
        setuser(response.data);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }, [tokens]);
  return {
    user,
    login,
    authentificate,
    tokens,
    isLoaded,
    current_school,
    setcurrent_school: useCallback((id: number) => {
      api
        .get("/school/" + id)
        .then((response) => {
          const school = response.data as School;
          setcurrent_school(school);
        })
        .catch(console.log);
    }, []),
  };
}

export default useAuth;
