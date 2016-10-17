import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth_reducer';
import search from './search_reducer';

const rootReducer = combineReducers({
  form,
  auth,
  search
});

export default rootReducer;
