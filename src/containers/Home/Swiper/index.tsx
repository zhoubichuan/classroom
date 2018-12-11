import * as React from "react";
import { connect } from "react-redux";
import "./index.less";
import * as ReactSwipe from "react-swipe";
import { string } from "prop-types";
interface Props {
  sliders: any;
}
class Swiper extends React.Component<Props> {
  render() {
    let swipeOptions = {
      auto: 1000,
      containous: true
    };
    let swipers = (
      <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
        {this.props.sliders.map((item: string, index: number) => (
          <div key={index}>
            <img src={item} />
          </div>
        ))}
      </ReactSwipe>
    );
    return (
      <div className="home-swipers">
        {this.props.sliders.length > 0 && swipers}
      </div>
    );
  }
}
export default connect()(Swiper);
