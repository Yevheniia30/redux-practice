import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './counter/counter-reducer';

// для работы redux девтулзов
// const REDUX_DEVTOOLS =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// начальный стейт для всех компонетов
// const initialState = {
//   counter: {
//     value: 10,
//     step: 7,
//   },
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
// кейсы для каждого типа action
// case 'counter/Increment':
//   return {
//   payload - значение из actions
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + action.payload,
//         },
//       };

//     case 'counter/Decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

// начальный стейт для countera
// const counterInitialState = {
//   value: 10,
//   step: 7,
// };

// // редюсер для value
// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return state + payload;

//     case 'counter/Decrement':
//       return state - payload;

//     default:
//       return state;
//   }
// };

// // редюсер для step
// const stepReducer = (state = 7, action) => state;

// редюсер для countera
// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

// глобальній общий редюсер обїединяет все редюсері
const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
