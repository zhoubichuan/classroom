import * as React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import "./index.less";
import { Store } from "../../types";
import actions from "../../store/actions/home";

interface Props {
  category: string;
  changeCategory: any;
}
class Home extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Header
          category={this.props.category}
          changeCategory={this.props.changeCategory}
        />
      </React.Fragment>
    );
  }
}
export default connect((state: Store) => state.home, actions)(Home);
