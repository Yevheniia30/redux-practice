import s from './Counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button className={s.counter_btn} onClick={onIncrement}>
        +
      </button>
      <button className={s.counter_btn} onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

export default Controls;
