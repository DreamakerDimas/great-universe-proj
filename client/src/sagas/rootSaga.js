import { takeLatest, takeLeading, takeEvery } from 'redux-saga/effects';

import {
  AUTH_TYPES,
  USER_TYPES,
  MAP_INTERACTIONS_TYPES,
} from '../actions/types';

import { loginSaga, registerSaga } from './authSaga';
import { createZoneSaga, getZoneSaga } from './mapSaga';
import { getUserSaga } from './userSaga';

function* rootSaga() {
  yield takeLatest(AUTH_TYPES.REGISTER, registerSaga);
  yield takeLatest(AUTH_TYPES.LOGIN, loginSaga);
  yield takeLatest(USER_TYPES.GET_USER, getUserSaga);
  yield takeLatest(MAP_INTERACTIONS_TYPES.GET_COUNTRY, getZoneSaga);
  yield takeLatest(MAP_INTERACTIONS_TYPES.CREATE_COUNTRY, createZoneSaga);
}

export default rootSaga;
