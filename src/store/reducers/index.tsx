import { combineReducers } from "redux";
import course from "./course";
import counter2 from "./counter2";
import { connectRouter } from "connected-react-router";
import history from "../../history";
let reducers = combineReducers({
  course,
  counter2,
  router: connectRouter(history)
});
export default reducers;
