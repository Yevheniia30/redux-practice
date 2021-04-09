import s from './Counter.module.css';
import Controls from './Controls';
const { Component } = require('react');

class Counter extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={s.counter}>
        <span className={s.counter_value}>{value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
