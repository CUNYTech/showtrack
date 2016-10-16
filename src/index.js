import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AUTH_USER } from './actions/types';
import RequireAuth from './components/auth/Require_Auth';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Search from './components/search/Search';

import configureStore from './store/configureStore';
const store = configureStore();

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin}/>
        <Route path="signout" component={Signout}/>
        <Route path="signup" component={Signup}/>
        <Route path="search" component={Search}/>
        <Route path="home" component={RequireAuth(Home)}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);

console.log(store.getState());
