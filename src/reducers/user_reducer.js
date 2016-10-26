import { FETCH_WATCHLIST } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WATCHLIST:
    return { ...state, list: action.payload.data };
  }
  return state;
}
