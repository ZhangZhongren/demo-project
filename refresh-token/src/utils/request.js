/* eslint-disable no-debugger */
import axios from "axios";
import { refreshAccessToken, addTask } from "./refresh";

const service = axios.create({
  baseURL: "/",
  timeout: 30000,
});

service.interceptors.request.use(
  (config) => {
    let { headers } = config;
    const s_tk = localStorage.getItem("ACCESS_TOKEN");
    s_tk &&
      Object.assign(headers, {
        ["AUTH"]: s_tk,
      });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    let { config, data } = response;
    //retry:第一次请求过期，接口调用refreshAccessToken，第二次重新请求，还是过期则reject出去
    let { retry } = config;
    /* 延续Promise链 */
    return new Promise((resolve, reject) => {
      if (data["code"] !== 'success') {
        if (data["code"] === "CODE_TOKEN_EXPIRED" && !retry) {
          config.retry = true;
          addTask({
            resolve,
            config,
            service
          });
          refreshAccessToken();
        } else {
          return reject(data);
        }
      } else {
        resolve(data);
      }
    });
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default service;