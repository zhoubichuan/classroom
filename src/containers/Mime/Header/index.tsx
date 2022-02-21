import * as React from "react"
import { connect } from "react-redux"
import "./index.less"
import { CSSTransition, TransitionGroup } from "react-transition-group"

declare function require(url: string): string
let logo = require("../../../images/logo.png")
interface Props {
  category: any
  changeCategory: any
  refreshLessons: any
}
interface IState {
  showList: any
}

class Header extends React.Component<Props, IState> {
  state = {
    showList: false,
  }
  changeCategory = (event: any) => {
    let category = event.target.dataset.category
    this.props.changeCategory(category)
    this.setState({ showList: false }, this.props.refreshLessons)
  }
  render() {
    let { category } = this.props
    return (
      <div className="home-header">
        <div className="header-menu">
          <img src={logo} alt="logo" />
        </div>
      </div>
    )
  }
}
export default connect()(Header)
