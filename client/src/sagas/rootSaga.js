import {takeLatest, takeLeading, takeEvery} from 'redux-saga/effects';

import {
  AUTH_TYPES,
  USER_TYPES,
  MAP_INTERACTIONS_TYPES,
  TAGS_EDITOR_TYPES,
} from '../actions/types';

import {loginSaga, registerSaga} from './authSaga';
import {
  createZoneSaga,
  getZoneSaga,
  updateZoneSaga,
  deleteZoneSaga,
} from './mapSaga';
import {getAllTagsSaga, createTagSaga, updateTagSaga, deleteTagSaga} from './tagsEditorSaga';
import {getUserSaga} from './userSaga';

function* rootSaga() {
  yield takeLatest(AUTH_TYPES.REGISTER, registerSaga);
  yield takeLatest(AUTH_TYPES.LOGIN, loginSaga);
  yield takeLatest(USER_TYPES.GET_USER, getUserSaga);
  yield takeLatest(MAP_INTERACTIONS_TYPES.GET_COUNTRY, getZoneSaga);
  yield takeLatest(MAP_INTERACTIONS_TYPES.CREATE_COUNTRY, createZoneSaga);
  yield takeLatest(MAP_INTERACTIONS_TYPES.UPDATE_COUNTRY, updateZoneSaga);
  yield takeLatest(MAP_INTERACTIONS_TYPES.DELETE_COUNTRY, deleteZoneSaga);
  yield takeLatest(TAGS_EDITOR_TYPES.GET_ALL_TAGS, getAllTagsSaga);
  yield takeLatest(TAGS_EDITOR_TYPES.CREATE_TAG, createTagSaga);
  yield takeLatest(TAGS_EDITOR_TYPES.UPDATE_TAG, updateTagSaga);
  yield takeLatest(TAGS_EDITOR_TYPES.DELETE_TAG, deleteTagSaga);
}

export default rootSaga;
