import { put } from 'redux-saga/effects';
import { MAP_INTERACTIONS_TYPES } from '../actions/types';
import * as restController from '../api/rest/restController';

const { 
  GET_COUNTRY_REQUEST, 
  GET_USER_SUCCESS, 
  GET_USER_ERROR, 
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

    yield put({ type: GET_COUNTRY_SUCCESS, data: resData.data });
  } catch (err) {
    yield put({ type: GET_COUNTRY_ERROR, error: err });
  }
}
