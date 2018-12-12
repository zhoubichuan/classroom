import { Route, Link, Switch } from "react-router-dom";
import * as React from "react";
import Tab from "../components/Tab";
import Home from "../containers/Home";
import Mime from "../containers/Mime";
import Profile from "../containers/Profile";
import "../common/index.less";

interface IProps {
  children: any;
}
export default class App extends React.Component<IProps> {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/mime" component={Mime} />
        <Route path="/profile" component={Profile} />
        <Tab />
      </React.Fragment>
    );
  }
}
