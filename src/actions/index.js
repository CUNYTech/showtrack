const ROOT_URL = 'http://dango.us-east-1.elasticbeanstalk.com/api/v1/accounts';
const LOCAL_ROOT_URL = 'http://localhost:3080';

import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './types';

export function signinUser({ username, password}) {
  // return a function with dispatch coming from redux thunk
  return function(dispatch) {
    axios.post(`${ROOT_URL}/login/`, { username ,password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/home'); // go to home route
      })
      .catch((response) => {
        console.log(response);

        dispatch(authError('response.data.email'));
      })
  }
}

export function signupUser({email, username, password, display_name}) {
  // return a function with dispatch coming from redux thunk
  return function(dispatch) {
    axios.post(`${ROOT_URL}/register/`, { email, username, password, display_name})
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/home'); // go to home route
      })
      .catch((response) => {
        console.log(response);
        dispatch(authError(response.data.email));
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        console.log(response);
      })
  }
}
