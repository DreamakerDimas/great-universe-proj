import { AUTH_TYPES } from '../actions/types';

const {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} = AUTH_TYPES;

const initialState = {
  loading: false,
  isAuthorized: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthorized: true,
        error: null,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        isAuthorized: false,
        error: action.error,
      };
    default:
      return state;
  }
}
