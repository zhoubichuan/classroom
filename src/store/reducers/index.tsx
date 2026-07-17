import { combineReducers } from "redux";
import home from "./home";
import session from "./session";
let reducers = combineReducers({
  home,
  session
});
export default reducers;
