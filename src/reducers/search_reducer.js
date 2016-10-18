import { SEARCH_RESULTS, FETCH_SHOW } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
  case SEARCH_RESULTS:
    return { ...state, searchResults: action.payload.data };
  case FETCH_SHOW:
    return { ...state, show: action.payload.data };
  }
  return state;
}
