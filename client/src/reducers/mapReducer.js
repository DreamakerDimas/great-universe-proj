import { MAP_INTERACTIONS_TYPES } from '../actions/types';

const {
  SHOW_DATA,
  HIDE_DATA,
  GET_COUNTRY_REQUEST,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_ERROR,
} = MAP_INTERACTIONS_TYPES;

const initialState = {
  loading: true,
  error: null,
  isShowed: false,
  zonesArr: [],
  zone_name: null,
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
    default:
      return state;
  }
}
