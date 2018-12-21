import { reg } from "../../api/session";
import { SAVE_SESSION } from "../action-types";
import { push } from "connected-react-router";
export default {
  reg(body: any) {
    return function(dispatch: any) {
      reg(body).then(response => {
        let { code, success, error } = response;
        dispatch({ type: SAVE_SESSION, payload: { success, error } });
        if (code == 0) {
          dispatch(push("/login"));
        }
      });
    };
  }
};
