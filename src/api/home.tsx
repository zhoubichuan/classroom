import { get } from "./index";
export const getSliders = () => {
  return get("/api/sliders");
};
