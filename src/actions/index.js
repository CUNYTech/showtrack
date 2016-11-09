const ROOT_URL = 'http://dango.us-east-1.elasticbeanstalk.com/api/v1';
const ROOT_URL_V2 = 'http://dango.us-east-1.elasticbeanstalk.com/api/v2';
const LOCAL_ROOT_URL = 'http://localhost:3080';

import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  SEARCH_RESULTS,
  FETCH_SHOW,
  FETCH_TRENDING_SHOWS,
  FETCH_WATCHLIST,
  FETCH_POPULAR_SHOWS
} from './types';

export function signinUser({ username, password}) {
  // return a function with dispatch coming from redux thunk
  return function(dispatch) {
    axios.post(`${ROOT_URL}/accounts/login/`, { username ,password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/home'); // go to home route
      })
      .catch((response) => {
        console.log(response);

        dispatch(authError(', something went wrong, please try again.'));
      })
  }
}

export function signupUser({email, username, password, display_name}) {
  // return a function with dispatch coming from redux thunk
  return function(dispatch) {
    axios.post(`${ROOT_URL}/accounts/register/`, { email, username, password, display_name})
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/home'); // go to home route
      })
      .catch((response) => {
        console.log(response);
        dispatch(authError(', something went wrong, please try again.'));
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

export function searchShows(searchTerm) {
  return function(dispatch) {
    axios.get(`${ROOT_URL_V2}/search/${searchTerm}/`)
      .then(response => {
        console.log(response);
        dispatch({
          type: SEARCH_RESULTS,
          payload: response
        })
      })
  }
}

export function fetchShow(id) {
  return function(dispatch) {
    axios.get(`${ROOT_URL_V2}/shows/${id}/`)
      .then(response => {
        console.log(response);
        dispatch({
          type: FETCH_SHOW,
          payload: response
        })
      })
  }
}

export function fetchTrendingShows() {
  return function(dispatch) {
    axios.get(`${ROOT_URL_V2}/trending/`)
      .then(response => {
        console.log('fetching trending shows', response);
        dispatch({
          type: FETCH_TRENDING_SHOWS,
          payload: response
        })
      })
  }
}

export function fetchPopularShows() {
  return function(dispatch) {
    axios.get(`${ROOT_URL_V2}/popular/`)
      .then(response => {
        console.log('fetching popular shows', response);
        dispatch({
          type: FETCH_POPULAR_SHOWS,
          payload: response
        })
      })
  }
}
