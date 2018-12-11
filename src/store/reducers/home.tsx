import { Home } from "../../types";
import { Action } from "../actions/home";
import * as types from "../action-types";
let initState: Home = { category: "all", sliders: [] };
export default function(state: Home = initState, action: Action) {
  switch (action.type) {
    case types.CHANGE_CATEGORY:
      return { ...state, category: action.payload };
    case types.SET_HOME_SLIDERS:
      return { ...state, sliders: action.payload };
    default:
      return state;
  }
}
