import * as React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import "./index.less";
import { Store } from "../../types";
import actions from "../../store/actions/home";
import Swiper from "./Swiper";
import { getSliders } from "../../api/home";
import List from "./List";
import { loadMore, downRefresh } from "../../utils";

interface Props {
  category: string;
  changeCategory: any;
  sliders: any;
  getSliders: any;
  lessons: any;
  getLessons: any;
  refreshLessons: any;
}
class Home extends React.Component<Props> {
  mainContent: any;
  componentDidMount() {
    this.props.getSliders();
    this.props.getLessons();
    loadMore(this.mainContent, this.props.getLessons);
    downRefresh(this.mainContent, this.props.refreshLessons);
  }
  render() {
    return (
      <React.Fragment>
        <Header
          category={this.props.category}
          changeCategory={this.props.changeCategory}
          refreshLessons={this.props.refreshLessons}
        />
        <div className="main-content" ref={ref => (this.mainContent = ref)}>
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
