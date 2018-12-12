import * as React from "react";
import { connect } from "react-redux";
import "./index.less";
import { getLessons } from "../../../api/home";
interface Props {
  lesson: any;
  getLessons: any;
}
class List extends React.Component<Props> {
  render() {
    let { list } = this.props.lesson;
    return (
      <div className="home-lessons">
        <div className="all-lessons">
          <i className="iconfont icon-kecheng-copy" />
          <span>全部课程</span>
        </div>
        {list.length > 0 ? (
          list.map((item: any, index: number): any => (
            <div className="lesson" key={index}>
              <img src={item.poster} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <div className="nodata">暂无数据</div>
        )}
      </div>
    );
  }
}
export default connect()(List);
