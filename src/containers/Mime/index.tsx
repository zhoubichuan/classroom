import * as React from "react"
import { connect } from "react-redux"
import Header from "./Header"
// import "./index.less"

interface Props {
  category?: string
  changeCategory?: any
  refreshLesson?: any
}
class Mime extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Header
          category={this.props.category}
          changeCategory={this.props.changeCategory}
          refreshLessons={this.props.refreshLesson}
        />
        {/* <div className="main-content" ref={(ref) => (this.mainContent = ref)}>
          mine
        </div> */}
      </React.Fragment>
    )
  }
}
export default connect()(Mime)
