import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./index.less";
declare function require(url: string): string;
let profile = require("../../images/profile.png");
interface Props {}

class Profile extends React.Component<Props> {
  render() {
    return (
      <div className="profile">
        <div className="profile-bg">
          <img src={profile} />
          <div className="profile-btn">
            <Link to="/login">登录</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Profile);
