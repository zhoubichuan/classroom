import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import actions from "../../store/actions/session";
import { Store } from "../../types";
import "./index.less";
interface Props {
  validate: any;
}
class Tab extends React.Component<Props> {
  componentWillMount() {
    this.props.validate();
  }
  render() {
    return (
      <nav className="footer">
        <NavLink exact to="/">
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
export default connect((state: Store) => state, actions)(Tab);
