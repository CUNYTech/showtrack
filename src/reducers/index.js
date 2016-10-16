import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  search: searchReducer
});

export default rootReducer;
