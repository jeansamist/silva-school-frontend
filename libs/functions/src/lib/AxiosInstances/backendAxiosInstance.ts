import dayjs from 'dayjs';
import axios from "axios";
const BAKEND_URL = "http://127.0.0.1:8000/api";
const tokens = localStorage.getItem("authTokens");
export type TokenType = {
  access?: string;
  refresh?: string;
  expire?: string;
} | null;

const authTokens: TokenType = tokens ? JSON.parse(tokens) : null;

export const backendAxiosInstance = axios.create({
  baseURL: BAKEND_URL,
  headers: {
    Authorization: authTokens?.access,
  },
});

backendAxiosInstance.interceptors.request.use(async request => {
  // if (!authTokens) {
  //   tokens = localStorage.getItem("authTokens");
  //   authTokens = tokens ? JSON.parse(tokens) : null;
  //   request.headers.Authorization = authTokens?.access
  //   // return request
  // }
  if (authTokens) {
    if (!dayjs(authTokens.expire).isAfter(dayjs())) {
      axios.post(`${BAKEND_URL}/token/refresh`, {
        refresh: authTokens.refresh
      }).then((resp) => {
        console.log('Refreshing');
        const data: TokenType = resp.data
        localStorage.setItem('authTokens', JSON.stringify(data))
        request.headers.Authorization = data?.access
      }).catch(console.log)
    }
  }
  return request
})

backendAxiosInstance.interceptors.response.use(async response => {
  console.log(response.data);
  return response
}, (error) => {
  console.log('Interceptor error', error);
})