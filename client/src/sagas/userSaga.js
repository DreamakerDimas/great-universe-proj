import { put } from 'redux-saga/effects';
import { USER_TYPES } from '../actions/types';
import * as restController from '../api/rest/restController';

export function* getUserData(action) {
  yield put({ type: USER_TYPES.GET_USER_REQUEST });
  try {
    const resData = yield restController.getUSer(action.data);
    yield put({ type: USER_TYPES.GET_USER_SUCCESS, payload: resData });
  } catch (err) {
    yield put({ type: USER_TYPES.GET_USER_ERROR });
  }
}
