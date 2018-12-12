import * as types from "../action-types";
import { push } from "connected-react-router";
import { getSliders, getLessons } from "../../api/home";
export interface chagneCagegory {
  type: string;
  payload: any;
}
export type Action = chagneCagegory;
export default {
  chagneCagegory(category: string): chagneCagegory {
    return { type: types.CHANGE_CATEGORY, payload: category };
  },
  getSliders() {
    return function(dispatch: any, getState: any) {
      getSliders().then(sliders => {
        dispatch({
          type: types.SET_HOME_SLIDERS,
          payload: sliders
        });
      });
    };
  },
  getLessons() {
    return function(dispatch: any, getState: any) {
      let {
        category,
        lessons: { hasMore, loading, offset, limit }
      } = getState().home;
      if (hasMore && !loading) {
        dispatch({ type: types.GET_HOME_LESSONS_LOADING });
        getLessons(category, offset, limit).then(payload => {
          dispatch({ type: types.SET_HOME_LESSONS, payload });
        });
      }
    };
  }
};
