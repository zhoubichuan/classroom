import * as React from "react";
import * as ReactDOM from "react-dom";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Link } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";
function Home() {
  return <div>首页</div>;
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/counter">counter</Link>
          </li>
          <li>
            <Link to="/counter2">counter2</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/counter2" component={Counter2} />
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
