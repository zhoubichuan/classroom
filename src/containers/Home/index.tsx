import * as React from "react";
import { connect } from "react-redux";
import "./index.less";

interface Props {}
class Home extends React.Component {
  render() {
    return <div>Home</div>;
  }
}
export default connect()(Home);
