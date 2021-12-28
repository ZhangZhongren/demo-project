/* eslint-disable no-debugger */
import { RefreshToken } from '../api/test'

let tasks = [];
let pending = false; //同时请求多个过期链接，保证只请求一次获取短token

export const addTask = (request) => {
  tasks.push(request);
};

export const reRequest = () => {
  tasks.forEach( async ({ service, config, resolve }) => {
    config.data = JSON.stringify({
      token: localStorage.getItem('ACCESS_TOKEN')
    })
    resolve(service(config))
  });
  tasks = [];
};

export const refreshAccessToken = async () => {
  if (!pending) {
    try {
      pending = true;
      const l_tk = localStorage.getItem("REFRESH_TOKEN");
      if (l_tk) {
        /* 重新获取短token */
        const { data, code } = await RefreshToken()
        console.log(data, 'refresh')
        if (code === 'success') {
          localStorage.setItem("ACCESS_TOKEN", data.token);
          localStorage.setItem("REFRESH_TOKEN", data.refresh_token);
          reRequest();
        } else {
          // TODO 登出逻辑
        }
      }
      return;
    } catch (e) {
      // TODO 登出逻辑
      return;
    } finally {
      pending = false;
    }
  }
};