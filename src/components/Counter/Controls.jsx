import s from './Counter.module.css';

const Controls = ({ step, onIncrement, onDecrement }) => {
  return (
    <div>
      <button className={s.counter_btn} onClick={onIncrement}>
        +{step}
      </button>
      <button className={s.counter_btn} onClick={onDecrement}>
        -{step}
      </button>
    </div>
  );
};

export default Controls;
