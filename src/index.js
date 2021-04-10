import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import actions from './redux/actions';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';

// console.log(store);
// console.log(store.dispatch(myAction(5)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
