const API_HOST = "http://localhost:3000";
export const get = (url: string) => {
  return fetch(API_HOST + url, {
    method: "GET",
    //告诉客户端在跨域请求的时候一定要携带cookie
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => {
    return res.json();
  });
};
export const post = (url: string, body: any) => {
  return fetch(API_HOST + url, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json"
    }
  }).then(res => res.json());
};
