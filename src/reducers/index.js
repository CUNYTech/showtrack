import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth_reducer';
import search from './search_reducer';
import user from './user_reducer';


const rootReducer = combineReducers({
  form,
  auth,
  search,
  user
});

export default rootReducer;
