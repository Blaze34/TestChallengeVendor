import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import info from './modules/info';

export default combineReducers({
  info,
  router
});
