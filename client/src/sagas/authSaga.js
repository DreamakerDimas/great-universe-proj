import { put } from 'redux-saga/effects';
import { AUTH_TYPES, USER_TYPES } from '../actions/types';
import * as restController from '../api/rest/restController';

export function* loginSaga(action) {
  yield put({ type: AUTH_TYPES.AUTH_REQUEST });
  try {
    const data = yield restController.login(action.data.values);
    if (data) action.data.history.push('/');
    yield put({ type: AUTH_TYPES.LOGIN_SUCCESS });
    yield put({ type: USER_TYPES.GET_USER });
  } catch (err) {
    yield put({ type: AUTH_TYPES.LOGIN_ERROR, error: err });
  }
}

export function* registerSaga(action) {
  yield put({ type: AUTH_TYPES.AUTH_REQUEST });
  try {
    const data = yield restController.register(action.data.values);
    if (data) action.data.history.push('/');
    yield put({ type: AUTH_TYPES.REGISTER_SUCCESS });
    yield put({ type: USER_TYPES.GET_USER });
  } catch (err) {
    yield put({ type: AUTH_TYPES.REGISTER_ERROR, error: err });
  }
}
