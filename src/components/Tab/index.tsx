import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./index.less";
interface Props {}
class Tab extends React.Component<Props> {
  render() {
    return (
      <nav className="footer">
        <NavLink to="/">
          <i className="iconfont icon-xingqiu" />
          首页
        </NavLink>
        <NavLink to="/mime">
          <i className="iconfont icon-react" />
          我的课程
        </NavLink>
        <NavLink to="/profile">
          <i className="iconfont icon-xiaolian" />
          个人中心
        </NavLink>
      </nav>
    );
  }
}
export default connect()(Tab);
