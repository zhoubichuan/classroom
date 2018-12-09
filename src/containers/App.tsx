import * as React from "react";
import Tab from "../components/Tab";
import "../common/index.less";

interface IProps {
  children: any;
}
export default class App extends React.Component<IProps> {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <Tab />
      </React.Fragment>
    );
  }
}
