import { put } from 'redux-saga/effects';
import AUTH_TYPES from '../actions/types';
import * as restController from '../api/rest/restController';
import history from '../browserHistory';

export function* loginSaga(action) {
  yield put({ type: AUTH_TYPES.AUTH_REQUEST });
  try {
    const resData = yield restController.login(action.data);
    history.replace('/');
    yield put({ type: AUTH_TYPES.LOGIN_SUCCESS, payload: resData });
  } catch (err) {
    yield put({ type: AUTH_TYPES.LOGIN_ERROR });
  }
}

export function* registerSaga(action) {
  yield put({ type: AUTH_TYPES.AUTH_REQUEST });
  try {
    const resData = yield restController.register(action.data);
    history.replace('/');
    yield put({ type: AUTH_TYPES.REGISTER_SUCCESS, payload: resData });
  } catch (err) {
    yield put({ type: AUTH_TYPES.REGISTER_ERROR });
  }
}
