import { combineReducers } from 'redux';
import actionTypes from './counter-types';

// редюсер для value
const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

// редюсер для step
const stepReducer = (state = 7, action) => state;

// редюсер для countera
const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
