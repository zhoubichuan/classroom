const API_HOST = "http://localhost:3000";
export const get = (url: string) => {
  return fetch(API_HOST + url, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  }).then(res => {
    return res.json();
  });
};
