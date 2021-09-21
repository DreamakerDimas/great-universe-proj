import {TAGS_EDITOR_TYPES} from '../actions/types';

const {
  SELECT_TAG,
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

const initialState = {
  loading: true,
  error: null,
  tagsTree: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_TAG:
      return {
        ...state,
        selectedTagData: action.data.tagData,
        selectedTagChain: action.data.tagsChainArr,
      };
    case GET_ALL_TAGS_REQUEST:
    case CREATE_TAG_REQUEST:
    case UPDATE_TAG_REQUEST:
    case DELETE_TAG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_TAGS_SUCCESS:
    case CREATE_TAG_SUCCESS:
    case UPDATE_TAG_SUCCESS:
    case DELETE_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        tagsTree: action.data,
      };
    case GET_ALL_TAGS_ERROR:
    case CREATE_TAG_ERROR:
    case UPDATE_TAG_ERROR:
    case DELETE_TAG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
