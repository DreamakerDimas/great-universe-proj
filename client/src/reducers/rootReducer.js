import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import mapReducer from './mapReducer';

export default combineReducers({
  alertsStore: alertReducer,
  authStore: authReducer,
  userStore: userReducer,
  mapStore: mapReducer,
});
