import { put, select } from 'redux-saga/effects';
import { MAP_INTERACTIONS_TYPES } from '../actions/types';
import * as restController from '../api/rest/restController';

const {
  GET_COUNTRY_REQUEST,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_ERROR,
  CREATE_COUNTRY_REQUEST,
  CREATE_COUNTRY_SUCCESS,
  CREATE_COUNTRY_ERROR,
  UPDATE_COUNTRY_REQUEST,
  UPDATE_COUNTRY_SUCCESS,
  UPDATE_COUNTRY_ERROR,
  DELETE_COUNTRY_REQUEST,
  DELETE_COUNTRY_SUCCESS,
  DELETE_COUNTRY_ERROR,
} = MAP_INTERACTIONS_TYPES;

export function* getZoneSaga(action) {
  yield put({ type: GET_COUNTRY_REQUEST });
  try {
    const resData = yield restController.getZoneData(action.data);

    yield put({
      type: GET_COUNTRY_SUCCESS,
      data: resData.data,
    });
  } catch (err) {
    yield put({ type: GET_COUNTRY_ERROR, error: err });
  }
}

export function* createZoneSaga(action) {
  yield put({ type: CREATE_COUNTRY_REQUEST });
  try {
    const resData = yield restController.createZone(action.data);

    yield put({
      type: CREATE_COUNTRY_SUCCESS,
      data: resData.data,
    });
  } catch (err) {
    yield put({ type: CREATE_COUNTRY_ERROR, error: err });
  }
}

export function* updateZoneSaga(action) {
  yield put({ type: UPDATE_COUNTRY_REQUEST });
  try {
    const resData = yield restController.updateZone(action.data);

    yield put({ type: UPDATE_COUNTRY_SUCCESS, data: resData.data });
  } catch (err) {
    yield put({ type: UPDATE_COUNTRY_ERROR, error: err });
  }
}

export function* deleteZoneSaga(action) {
  yield put({ type: DELETE_COUNTRY_REQUEST });
  try {
    yield restController.deleteZone(action.data);

    yield put({ type: DELETE_COUNTRY_SUCCESS });
  } catch (err) {
    yield put({ type: DELETE_COUNTRY_ERROR, error: err });
  }
}
