import * as React from "react";
import { connect } from "react-redux";
import "./index.less";
import { CSSTransition, TransitionGroup } from "react-transition-group";

declare function require(url: string): string;
let logo = require("../../../images/logo.png");
interface Props {
  category: string;
  changeCategory: any;
  refreshLessons: any;
}
interface IState {
  showList: any;
}

class Header extends React.Component<Props, IState> {
  state = {
    showList: false
  };
  changeCategory = (event: any) => {
    let category = event.target.dataset.category;
    this.props.changeCategory(category);
    this.setState({ showList: false }, this.props.refreshLessons);
  };
  render() {
    let { category } = this.props;
    return (
      <div className="home-header">
        <div className="header-menu">
          <img src={logo} alt="logo" />
          <div
            onClick={() => this.setState({ showList: !this.state.showList })}
          >
            {this.state.showList ? (
              <i className="iconfont icon-guanbi" />
            ) : (
              <i className="iconfont icon-uilist" />
            )}
          </div>
        </div>
        <TransitionGroup>
          {this.state.showList && (
            <CSSTransition timeout={500} classNames="fade">
              <ul className="menu-list">
                <li
                  data-category="react"
                  className={category == "react" ? "active" : ""}
                >
                  React
                </li>
                <li
                  data-category="vue"
                  className={category == "vue" ? "active" : ""}
                >
                  vue
                </li>
              </ul>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    );
  }
}
export default connect()(Header);
