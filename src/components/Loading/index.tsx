import * as React from "react";
import { connect } from "react-redux";
import "./index.less";
declare function require(url: string): string;
let loading = require("../../images/loading.gif");
interface Props {}
class Loading extends React.Component<Props> {
  render() {
    return (
      <div className="loading">
        <img src={loading} alt="" />
      </div>
    );
  }
}
export default connect()(Loading);
