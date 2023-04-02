import axios from "axios";
import dayjs from "dayjs";
import { useState, useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface

export type TokenType =
  | {
      access?: string;
      refresh?: string;
      access_expire?: string;
      refresh_expire?: string;
    }
  | null
  | undefined;
export function useApi(_tokens?: TokenType) {
  const [tokens, settokens] = useState<TokenType>(_tokens);
  const BAKEND_URL = "http://127.0.0.1:8000";
  const API_BAKEND_URL = BAKEND_URL + "/api";

  const backendAxiosInstance = axios.create({
    baseURL: API_BAKEND_URL,
    headers: {
      Authorization: tokens?.access,
    },
  });

  backendAxiosInstance.interceptors.request.use((request) => {
    if (tokens) {
      if (dayjs(tokens.access_expire).isBefore(dayjs())) {
        if (dayjs(tokens.refresh_expire).isAfter(dayjs())) {
          axios
            .post(`${API_BAKEND_URL}/token/refresh`, {
              refresh: tokens.refresh,
            })
            .then((resp) => {
              const data: TokenType = resp.data;
              settokens(data);
              localStorage.setItem("authTokens", JSON.stringify(data));
              request.headers.Authorization = data?.access;
            })
            .catch();
        } else {
          settokens(null);
          localStorage.removeItem("authTokens");
        }
      }
    }
    return request;
  });
  const api = useCallback(backendAxiosInstance, [tokens]);
  return { tokens, api, settokens, API_BAKEND_URL, BAKEND_URL };
}

export default useApi;
