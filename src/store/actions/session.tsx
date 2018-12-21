import { reg, login, logout, validate } from "../../api/session";
import { SAVE_SESSION } from "../action-types";
import { push } from "connected-react-router";
export default {
  reg(body: any) {
    return function(dispatch: any) {
      reg(body).then(response => {
        let { code, success, error, user } = response;
        dispatch({ type: SAVE_SESSION, payload: { success, error, user } });
        if (code == 0) {
          dispatch(push("/login"));
        } else {
          alert(0);
        }
      });
    };
  },
  login(body: any) {
    return function(dispatch: any) {
      login(body).then(response => {
        let { code, success, error, user } = response;
        dispatch({ type: SAVE_SESSION, payload: { success, error, user } });
        if (code == 0) {
          dispatch(push("/profile"));
        } else {
          alert(error);
        }
      });
    };
  },
  logout() {
    return function(dispatch: any) {
      logout().then(response => {
        let { code, success, error } = response;
        dispatch({
          type: SAVE_SESSION,
          payload: {
            success,
            error
          }
        });
        if (code == 0) {
          dispatch(push("/login"));
        } else {
          alert(error);
        }
      });
    };
  },
  validate() {
    return function(dispatch: any) {
      validate().then(response => {
        let { code, success, error, user } = response;
        dispatch({ type: SAVE_SESSION, payload: { success, error, user } });
      });
    };
  }
};
