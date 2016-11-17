import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import routes from './routes'
import axios from 'axios';
import { AUTH_USER } from './actions/types';

const store = configureStore();
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
  axios.defaults.headers.common['Authorization'] =  "JWT " + token;
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('.container')
);
