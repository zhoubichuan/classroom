import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
const middlewares = process.env.NODE_ENV === "test" ? [thunk] : [thunk, logger as any];
let store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);
export default store;
