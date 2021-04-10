import { connect } from 'react-redux';

import s from './Counter.module.css';
import Controls from './Controls';
import actions from '../../redux/counter/counter-actions';
// const { Component } = require('react');

// меняем класс на обычную ф-цию, т к на редаксе у нас компоненты только рендерят разметку
const Counter = ({ value, step, onIncrement, onDecrement }) => {
  // state = {
  //   value: 0,
  // };

  // handleIncrement = () => {
  //   this.setState(prevState => ({
  //     value: prevState.value + 1,
  //   }));
  // };

  // handleDecrement = () => {
  //   this.setState(prevState => ({
  //     value: prevState.value - 1,
  //   }));
  // };

  // render() {
  //   const { value } = this.state;
  return (
    <div className={s.counter}>
      <span className={s.counter_value}>{value}</span>
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />

      <h1>Counter</h1>
    </div>
  );
};

// переносим стейт в пропсі
// state - из store
const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
    // b: 5,
  };
};

// преносим функции в пропсы
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
