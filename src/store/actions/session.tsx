import {
  reg as regApi,
  login as loginApi,
  logout as logoutApi,
  validate as validateApi
} from "../../api/session";
import { SAVE_SESSION } from "../action-types";
import { push } from "../../history";
export default {
  reg(body: any) {
    return function(dispatch: any) {
      regApi(body).then((response:any) => {
        let { code, success, error, user } = response;
        dispatch({ type: SAVE_SESSION, payload: { success, error, user } });
        if (code == 0) {
          push("/login");
        } else {
          alert(0);
        }
      });
    };
  },
  login(body: any) {
    return function(dispatch: any) {
      loginApi(body).then((response:any) => {
        let { code, success, error, user } = response;
        dispatch({ type: SAVE_SESSION, payload: { success, error, user } });
        if (code == 0) {
          push("/profile");
        } else {
          alert(error);
        }
      });
    };
  },
  logout() {
    return function(dispatch: any) {
      logoutApi().then((response:any) => {
        let { code, success, error } = response;
        dispatch({
          type: SAVE_SESSION,
          payload: {
            success,
            error
          }
        });
        if (code == 0) {
          push("/login");
        } else {
          alert(error);
        }
      });
    };
  },
  validate() {
    return function(dispatch: any) {
      validateApi().then((response:any) => {
        let { code, success, error, user } = response;
        dispatch({ type: SAVE_SESSION, payload: { success, error, user } });
      });
    };
  }
};
