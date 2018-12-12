import * as React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import "./index.less";
import { Store } from "../../types";
import actions from "../../store/actions/home";
import Swiper from "./Swiper";
import { getSliders } from "../../api/home";
import List from "./List";

interface Props {
  category: string;
  changeCategory: any;
  sliders: any;
  getSliders: any;
  lessons: any;
  getLessons: any;
}
class Home extends React.Component<Props> {
  componentDidMount() {
    this.props.getSliders();
    this.props.getLessons();
  }
  render() {
    return (
      <React.Fragment>
        <Header
          category={this.props.category}
          changeCategory={this.props.changeCategory}
        />
        <div className="main-content">
          <Swiper sliders={this.props.sliders} />
          <List
            lesson={this.props.lessons}
            getLessons={this.props.getLessons}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default connect((state: Store) => state.home, actions)(Home);
