import { takeLatest, takeLeading, takeEvery } from 'redux-saga/effects';

import { AUTH_TYPES, USER_TYPES } from '../actions/types';

import { loginSaga, registerSaga } from './authSaga';
import { getUserSaga } from './userSaga';

function* rootSaga() {
  yield takeLatest(AUTH_TYPES.REGISTER, registerSaga);
  yield takeLatest(AUTH_TYPES.LOGIN, loginSaga);
  yield takeLatest(USER_TYPES.GET_USER, getUserSaga);
}

export default rootSaga;
