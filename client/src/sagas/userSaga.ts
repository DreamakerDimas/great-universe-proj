import {put} from 'redux-saga/effects';
import {USER_TYPES} from '../actions/types';
import * as restController from '../api/rest/restController';

export function* getUserSaga(action) {
  yield put({type: USER_TYPES.GET_USER_REQUEST});
  try {
    const resData = yield restController.getUser(action.data);
    console.log(resData);
    yield put({type: USER_TYPES.GET_USER_SUCCESS, payload: resData.data});
  } catch (err) {
    yield put({type: USER_TYPES.GET_USER_ERROR, error: err});
  }
}
