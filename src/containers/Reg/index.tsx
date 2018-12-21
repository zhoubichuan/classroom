import * as React from "react";
import NavHeader from "../../components/NavHeader";
import { connect } from "react-redux";
import "./index.less";
import { Link } from "react-router-dom";
declare function require(url: string): string;
let profile = require("../../images/profile.png");
interface IProps {
  history: any;
}
export default class Reg extends React.Component<IProps> {
  render() {
    return (
      <div className="reg">
        <NavHeader title="注册" history={this.props.history} />
        <div className="reg-logo">
          <img src={profile} />
        </div>
        <input type="text" name="username" placeholder="手机" />
        <input type="text" name="passowrd" placeholder="密码" />
        <Link to="/login">前往登录</Link>
        <button>注&nbsp;册</button>
      </div>
    );
  }
}
