import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./containers/Home";
import Mime from "./containers/Mime";
import Profile from "./containers/Profile";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Link, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";
import App from "./containers/App";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/mime" component={Mime} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
