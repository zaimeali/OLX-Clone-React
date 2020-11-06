import React from 'react';
import ReactDOM from 'react-dom';

// Styling
import './index.css';

// Component
import App from './App';

// Redux
import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
// import userReducer from './redux/reducer'
import store from './redux/store'

// PWA File
import * as serviceWorker from './serviceWorker';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// const store = configureStore({
//   reducer: userReducer,
// })

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
