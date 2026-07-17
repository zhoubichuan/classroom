import * as types from "../action-types";
import {
  getSliders as getSlidersApi,
  getLessons as getLessonsApi
} from "../../api/home";
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
      getSlidersApi().then(sliders => {
        dispatch({
          type: types.SET_HOME_SLIDERS,
          payload: sliders.data
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
        dispatch({ type: types.GET_HOME_LESSONS_LOADING, payload: true });
        getLessonsApi(category, offset, limit).then(result => {
          let { code, data, error } = result;
          if (code == 0) {
            dispatch({
              type: types.SET_HOME_LESSONS,
              payload: data
            });
          } else {
            dispatch({ type: types.GET_HOME_LESSONS_LOADING, payload: false });
            alert(error);
          }
        });
      }
    };
  },
  refreshLessons() {
    return function(dispatch: any, getState: any) {
      let {
        category,
        lessons: { hasMore, loading, offset, limit }
      } = getState().home;
      if (!loading) {
        dispatch({ type: types.REFRESH_HOME_LESSONS_LOADING, payload: true });
        getLessonsApi(category, 0, limit).then(result => {
          let { code, data, error } = result;
          if (code == 0) {
            dispatch({ type: types.REFRESH_HOME_LESSONS, payload: data });
          } else {
            dispatch({
              type: types.REFRESH_HOME_LESSONS_LOADING,
              payload: false
            });
            alert(error);
          }
        });
      }
    };
  }
};
