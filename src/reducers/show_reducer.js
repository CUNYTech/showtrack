import {
  FETCH_WATCHLIST,
  FETCH_TRENDING_SHOWS,
  FETCH_POPULAR_SHOWS,
  FETCH_EPISODES,
  FETCH_SEASONS,
  RESET_EPISODES
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TRENDING_SHOWS:
      return { ...state, trendingShows: action.payload.data };
    case FETCH_WATCHLIST:
      return { ...state, watchList: action.payload };
    case FETCH_POPULAR_SHOWS:
      return { ...state, popularShows: action.payload.data.results };
    case FETCH_EPISODES:
      return { ...state, episodes: action.payload.data };
    case RESET_EPISODES:
      return { ...state, episodes: null };
    case FETCH_SEASONS:
      return { ...state, episodesPerSeason: { ...state.episodesPerSeason, [action.payload.id]: action.payload.seasons}};
    }
  return state;
}
