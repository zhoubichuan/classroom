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
//match history location 只要一个组件是从Route中渲染出来的，那么就会有这三个属性
export default class Login extends React.Component<IProps> {
  render() {
    return (
      <div className="login">
        <NavHeader title="登录" history={this.props.history} />
        <div className="login-logo">
          <img src={profile} />
        </div>
        <input type="text" name="username" placeholder="手机" />
        <input type="text" name="password" placeholder="密码" />
        <Link to="/reg">前往注册</Link>
        <button>登&nbsp;录</button>
      </div>
    );
  }
}
