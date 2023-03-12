import dayjs from 'dayjs';
import axios from "axios";
const BAKEND_URL = "http://127.0.0.1:8000/api";
let tokens = localStorage.getItem("authTokens");
let authTokens: {
  access?: string;
  refresh?: string;
  expire?: string;
} | null = tokens ? JSON.parse(tokens) : null;

export const backendAxiosInstance = axios.create({
  baseURL: BAKEND_URL,
  // headers: {
  //   Authorization: authTokens?.access,
  // },
});

backendAxiosInstance.interceptors.request.use(async request => {
  if (!authTokens) {
    tokens = localStorage.getItem("authTokens");
    authTokens = tokens ? JSON.parse(tokens) : null;
    
    // request.headers.Authorization = authTokens?.access
    return request
  }

  if (!dayjs(authTokens?.expire).isAfter(dayjs())) {
    axios.post(`${BAKEND_URL}/token/refresh`, {
      refresh: authTokens?.refresh
    }).then((response) => {
      const data: typeof authTokens = response.data;
      localStorage.setItem('authTokens', JSON.stringify(data))
      request.headers.Authorization = data?.access
    }).catch((reason) => {
      console.log(reason);
    });
  }
  return request
})