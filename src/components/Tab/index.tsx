import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./index.less";
interface Props {}
class Mime extends React.Component<Props> {
  render() {
    return (
      <nav className="footer">
        <NavLink exact to="/" activeClassName="active">
          <i className="iconfont icon-xingqiu" />
          首页
        </NavLink>
        <NavLink exact to="/mime" activeClassName="active">
          <i className="iconfont icon-react" />
          我的课程
        </NavLink>
        <NavLink exact to="/" activeClassName="active">
          <i className="iconfont icon-xioalian" />
          个人中心
        </NavLink>
      </nav>
    );
  }
}
export default connect()(Mime);
