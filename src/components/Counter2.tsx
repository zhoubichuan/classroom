import * as React from "react";
import { connect } from "react-redux";
import actions from "../store/actions/counter2";
import { Store, Counter2 } from "../types";

interface IProps {
  number: number;
  increment: any;
  incrementDelay: any;
  decrement: any;
}
interface IState {
  num: number;
}
class Counter2Componnet extends React.Component<IProps, IState> {
  render() {
    let { number, increment, decrement, incrementDelay } = this.props;
    console.log(this.props);
    return (
      <div>
        <p>{number}</p>
        <button onClick={increment}>+</button>
        <button onClick={incrementDelay}>1s后加1</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}
let mapStateToProps = function(state: Store): Counter2 {
  return state.counter2;
};
export default connect(mapStateToProps, actions)(Counter2Componnet);
