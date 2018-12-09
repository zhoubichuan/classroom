import { Course } from "../../types";
import { Action } from "../actions/Course";
import * as types from "../action-types";
let initState: Course = { number: 0 };
export default function(state: Course = initState, action: Action) {
  switch (action.type) {
    case types.INCREMENT:
      return { number: state.number + 1 };
    case types.DECREMNT:
      return { number: state.number - 1 };
    default:
      return state;
  }
}
