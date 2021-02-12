import { takeLatest, takeLeading, takeEvery } from 'redux-saga/effects';
import AUTH_TYPES from '../actions/types';
import { loginSaga, registerSaga } from './authSaga';

function* rootSaga() {
  yield takeLatest(AUTH_TYPES.REGISTER_REQUEST, registerSaga);
  yield takeLatest(AUTH_TYPES.LOGIN_REQUEST, loginSaga);
}

export default rootSaga;
