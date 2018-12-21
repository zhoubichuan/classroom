import { get, post } from "./index";
export const reg = (body: any) => {
  return post("/api/reg", body);
};
