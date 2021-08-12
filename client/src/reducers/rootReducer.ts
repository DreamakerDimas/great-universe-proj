import {combineReducers} from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import mapReducer from './mapReducer';
import tagsEditorReducer from './tagsEditorReducer';

export default combineReducers({
  alertsStore: alertReducer,
  authStore: authReducer,
  userStore: userReducer,
  mapStore: mapReducer,
  tagsEditorStore: tagsEditorReducer,
});
