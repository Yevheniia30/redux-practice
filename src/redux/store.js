// import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter/counter-reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// глобальній общий редюсер обїединяет все редюсері
// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// логируем action в консоли как в редакс-тулзах
const middleware = [...getDefaultMiddleware(), logger];

// const store = createStore(rootReducer, composeWithDevTools());

console.log(process.env.NODE_ENV);

// вместо combinedreducers кидаем сразу в стор объект редюсер
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
