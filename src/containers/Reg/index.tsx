import * as React from "react";
import NavHeader from "../../components/NavHeader";
import { connect } from "react-redux";
import "./index.less";
import { Link } from "react-router-dom";
import { Store } from "../../types";
import actions from "../../store/actions/session";
declare function require(url: string): string;
let profile = require("../../images/profile.png");
interface IProps {
  history: any;
  reg: any;
}
class Reg extends React.Component<IProps> {
  username: any;
  password: any;
  handleReg = () => {
    let username = this.username.value;
    let password = this.password.value;
    this.props.reg({ username, password });
  };
  render() {
    return (
      <div className="reg">
        <NavHeader title="注册" history={this.props.history} />
        <div className="reg-logo">
          <img src={profile} />
        </div>
        <input
          ref={input => (this.username = input)}
          type="text"
          name="username"
          placeholder="手机"
        />
        <input
          ref={input => (this.password = input)}
          type="text"
          name="passowrd"
          placeholder="密码"
        />
        <Link to="/login">前往登录</Link>
        <button onClick={this.handleReg}>注&nbsp;册</button>
      </div>
    );
  }
}
export default connect((state: Store) => state.session, actions)(Reg);
