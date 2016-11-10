import { FETCH_WATCHLIST, FETCH_TRENDING_SHOWS, FETCH_POPULAR_SHOWS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_TRENDING_SHOWS:
    return { ...state, trendingShows: action.payload.data };
  case FETCH_WATCHLIST:
    return { ...state, watchList: action.payload.data };
  case FETCH_POPULAR_SHOWS:
    return { ...state, popularShows: action.payload.data.results };
  }
  return state;
}
