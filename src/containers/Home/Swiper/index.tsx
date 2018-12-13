import * as React from "react";
import { connect } from "react-redux";
import "./index.less";
import * as ReactSwipe from "react-swipe";
interface Props {
  sliders: any;
}
interface State {
  index: number;
}
class Swiper extends React.Component<Props, State> {
  state = {
    index: 0
  };
  render() {
    let swipeOptions = {
      auto: 1000,
      continuous: true,
      callback: (index: number) => {
        this.setState({ index });
      }
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
        <div className="dots">
          {this.props.sliders.map((item: string, index: number) => (
            <span
              key={index}
              className={`dot ${this.state.index == index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default connect()(Swiper);
