import { USER_TYPES } from '../actions/types';

const { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR };

const initialState = {
  loading: true,
  error: null,
  data: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
  }
}
