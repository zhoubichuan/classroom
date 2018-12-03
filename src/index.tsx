import * as React from "react";
import * as ReactDOM from "react-dom";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
