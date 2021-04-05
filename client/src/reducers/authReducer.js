import { AUTH_TYPES } from '../actions/types';

const {
  AUTH_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} = AUTH_TYPES;

const initialState = {
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        loading: false,
        error: null,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
