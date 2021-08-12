import {put, select} from 'redux-saga/effects';
import {TAGS_EDITOR_TYPES} from '../actions/types';
import * as restController from '../api/rest/restController';

const {
  GET_ALL_TAGS_REQUEST,
  GET_ALL_TAGS_SUCCESS,
  GET_ALL_TAGS_ERROR,
  CREATE_TAG_REQUEST,
  CREATE_TAG_SUCCESS,
  CREATE_TAG_ERROR,
  UPDATE_TAG_REQUEST,
  UPDATE_TAG_SUCCESS,
  UPDATE_TAG_ERROR,
  DELETE_TAG_REQUEST,
  DELETE_TAG_SUCCESS,
  DELETE_TAG_ERROR,
} = TAGS_EDITOR_TYPES;

export function* getAllTagsSaga() {
  yield put({type: GET_ALL_TAGS_REQUEST});
  try {
    const {data} = yield restController.getAllTags();
    yield put({type: GET_ALL_TAGS_SUCCESS, data});
  } catch (err) {
    yield put({type: GET_ALL_TAGS_ERROR, error: err});
  }
}

export function* createTagSaga(action) {
  yield put({type: CREATE_TAG_REQUEST});
  try {
    const isNewTree = action.data.tagsChainArr.length === 0;
    const resData = yield restController.createTag(action.data);

    const {tagsTree} = yield select((state) => state.tagsEditorStore);

    const newBranch = resData.data;

    let newTree;
    if (isNewTree) {
      newTree = [...tagsTree, newBranch];
    } else {
      newTree = tagsTree.map((branch) =>
          branch.code_name === newBranch.code_name ? newBranch : branch);
    }

    yield put({type: CREATE_TAG_SUCCESS, data: newTree});
  } catch (err) {
    yield put({type: CREATE_TAG_ERROR, error: err});
  }
}

export function* updateTagSaga(action) {
  yield put({type: UPDATE_TAG_REQUEST});
  try {
    const resData = yield restController.updateTag(action.data);

    const {tagsTree} = yield select((state) => state.tagsEditorStore);

    const newBranch = resData.data;
    const newTree = tagsTree.map((branch) =>
        branch.code_name === newBranch.code_name ? newBranch : branch);

    yield put({type: UPDATE_TAG_SUCCESS, data: newTree});
  } catch (err) {
    yield put({type: UPDATE_TAG_ERROR, error: err});
  }
}

export function* deleteTagSaga(action) {
  yield put({type: DELETE_TAG_REQUEST});
  try {
    const isDeletedFullTree = action.data.tagsChainArr.length === 1;
    const resData = yield restController.deleteTag(action.data);

    const {tagsTree} = yield select((state) => state.tagsEditorStore);

    const newBranch = resData.data;

    let newTree;
    if (isDeletedFullTree) {
      newTree = tagsTree.filter((branch) => branch.code_name !== action.data.tagsChainArr[0]);
    } else {
      newTree = tagsTree.map((branch) =>
          branch.code_name === newBranch.code_name ? newBranch : branch);
    }

    yield put({type: DELETE_TAG_SUCCESS, data: newTree});
  } catch (err) {
    yield put({type: DELETE_TAG_ERROR, error: err});
  }
}
