import * as types from "../action-types";
export interface increment {
  type: typeof types.INCREMENT;
}
export interface decrement {
  type: typeof types.DECREMNT;
}
export type Action = increment | decrement;
export default {
  increment(): increment {
    return { type: types.INCREMENT };
  },
  incrementDelay(): any {
    return function(dispatch: any, getState: any) {
      setTimeout(function() {
        dispatch({ type: types.INCREMENT });
      }, 1000);
    };
  },
  decrement(): decrement {
    return { type: types.DECREMNT };
  }
};
class A<T> {
  name: T;
}
let a = new A<number>();
let b = new A<string>();
