import * as React from "react";
import { connect } from "react-redux";
import "./index.less";
interface Props {}

class Profile extends React.Component<Props> {
  render() {
    return <div>Profile</div>;
  }
}
export default connect()(Profile);
