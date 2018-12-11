import { combineReducers } from "redux";
import home from "./home";
import { connectRouter } from "connected-react-router";
import history from "../../history";
let reducers = combineReducers({
  home,
  router: connectRouter(history)
});
export default reducers;
