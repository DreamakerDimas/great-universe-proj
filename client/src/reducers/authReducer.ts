import {AUTH_TYPES} from '../actions/types';

interface AuthState {
  loading: boolean;
  isAuthorized: boolean;
  error: null | Object | string;
}

interface ErrorPayload {
  error: Object;
}

interface AuthAction {
  type: string;
  error?: ErrorPayload;
}

const initialState: AuthState = {
  loading: false,
  isAuthorized: false,
  error: null,
};

const {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} = AUTH_TYPES;

export default function(state = initialState, action: AuthAction) {
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
