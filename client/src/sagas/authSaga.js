import { put } from 'redux-saga/effects';
import { AUTH_TYPES, USER_TYPES } from '../actions/types';
import * as restController from '../api/rest/restController';

export function* loginSaga(action) {
  yield put({ type: AUTH_TYPES.LOGIN_REQUEST });
  try {
    yield restController.login(action.data.values);
    yield put({ type: AUTH_TYPES.LOGIN_SUCCESS });
    action.data.history.push('/');
    yield put({ type: USER_TYPES.GET_USER });
  } catch (err) {
    console.log(err);
    yield put({ type: AUTH_TYPES.LOGIN_ERROR, error: err });
  }
}

export function* registerSaga(action) {
  yield put({ type: AUTH_TYPES.REGISTER_REQUEST });
  try {
    yield restController.register(action.data.values);
    yield put({ type: AUTH_TYPES.REGISTER_SUCCESS });
    action.data.history.push('/');
    yield put({ type: USER_TYPES.GET_USER });
  } catch (err) {
    yield put({ type: AUTH_TYPES.REGISTER_ERROR, error: err });
  }
}
