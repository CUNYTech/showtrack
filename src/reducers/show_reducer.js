import { FETCH_WATCHLIST, FETCH_TRENDING_SHOWS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_TRENDING_SHOWS:
    return { ...state, trending: action.payload.data };
  case FETCH_WATCHLIST:
    return { ...state, watchList: action.payload.data };
  }
  return state;
}
