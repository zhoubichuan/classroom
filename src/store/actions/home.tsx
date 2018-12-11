import * as types from "../action-types";
import { push } from "connected-react-router";
export interface chagneCagegory {
  type: string;
  payload: string;
}
export type Action = chagneCagegory;
export default {
  chagneCagegory(category: string): chagneCagegory {
    return { type: types.CHANGE_CATEGORY, payload: category };
  }
};
