const ROOT_URL = 'http://starter-dev2.us-east-1.elasticbeanstalk.com/api/v1';
const ROOT_URL_V2 = 'http://starter-dev2.us-east-1.elasticbeanstalk.com/api/v2';
const ROOT_URL_V3 = 'http://starter-dev2.us-east-1.elasticbeanstalk.com'
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
  FETCH_POPULAR_SHOWS,
  RESET_SHOW,
  FETCH_EPISODES,
  FETCH_SEASONS,
  RESET_SEARCH_RESULTS,
  RESET_EPISODES
} from './types';

export function signinUser({ username, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/accounts/login/`, { username, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] =  "JWT " + response.data.token;
        browserHistory.push('/my-list');
      })
      .catch((error) => {
        console.log(error);
        dispatch(authError('Something went wrong, please try again.'));
      })
  }
}

export function signupUser({ email, username, password, display_name }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/accounts/register/`, { email, username, password, display_name })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] =  "JWT " + response.data.token;
        browserHistory.push('/my-list');
      })
      .catch((error) => {
        console.log(error);
        dispatch(authError('Something went wrong, please try again.'));
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
        dispatch({
          type: FETCH_POPULAR_SHOWS,
          payload: response
        })
      })
  }
}

export function fetchWatchList() {
  return function(dispatch) {
    axios.get(`${ROOT_URL_V2}/watchlist/list`)
      .then(response => {
        let data = response.data;
        data.sort(function(a,b){
          return new Date(b.last_updated) - new Date(a.last_updated);
        });
        dispatch({
          type: FETCH_WATCHLIST,
          payload: data
        })
      })
  }
}

export function addToWatchList(show) {
  return function(dispatch) {
    axios.post(`${ROOT_URL_V3}/watchlist/`, { show_id : show.id })
      .then(response => {
        dispatch({
          type: FETCH_WATCHLIST,
          payload: response
        })
      })
      .catch((error) => {
        console.log('error', error);
      })
  }
}

export function updateProgressWatchList(show, progress) {
  return function(dispatch) {
    axios.patch(`${ROOT_URL_V3}/watchlist/update/`, { show_id : show, progress: progress })
      .then(response => {
        window.location.reload();
      })
      .catch((error) => {
        console.log('error', error);
      })
  }
}

export function resetShow() {
    return {
      type: RESET_SHOW
    }
}

export function resetEpisodes() {
    return {
      type: RESET_EPISODES
    }
}

export function resetSearchResults() {
    return {
      type: RESET_SEARCH_RESULTS
    }
}

export function fetchEpisodes(id) {
  return function(dispatch) {
    axios.get(`${ROOT_URL_V2}/shows/${id}/episodes`)
      .then(response => {
        dispatch({
          type: FETCH_EPISODES,
          payload: response
        })
      })
  }
}

export function fetchSeasons(id) {
  return function(dispatch) {
    axios.get(`${ROOT_URL_V2}/shows/${id}/episodes`)
      .then(response => {
        let episodes = response.data;
        let totalSeasons = episodes[episodes.length - 1].season;
        let season = {};

        episodes.forEach(function(episode) {
          let currSeason = episode.season;
          if( !(currSeason in season) )
            season[currSeason] = 1;

          season[currSeason] = Math.max(season[currSeason], episode.number)
        })

        dispatch({
          type: FETCH_SEASONS,
          payload: { id , seasons: season }
        })
      })
  }
}
