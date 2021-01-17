import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Link, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";
function App(){
  debugger
  return <div>hello</div>
}
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
