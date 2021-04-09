import { MAP_INTERACTIONS_TYPES } from '../actions/types';

const {
  SHOW_DATA,
  HIDE_DATA,
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

const initialState = {
  loading: true,
  error: null,
  isShowed: false,
  zone_name: null,
  currentData: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_DATA:
      return {
        ...state,
        isShowed: true,
        zone_name: action.data,
      };
    case HIDE_DATA:
      return {
        ...state,
        isShowed: false,
        zone_name: null,
      };
    case CREATE_COUNTRY_REQUEST:
    case GET_COUNTRY_REQUEST:
    case UPDATE_COUNTRY_REQUEST:
    case DELETE_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_COUNTRY_SUCCESS:
    case GET_COUNTRY_SUCCESS:
    case UPDATE_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        currentData: action.data,
      };
    case DELETE_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        currentData: null,
      };
    case CREATE_COUNTRY_ERROR:
    case GET_COUNTRY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        currentData: null,
      };
    case DELETE_COUNTRY_ERROR:
    case UPDATE_COUNTRY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
