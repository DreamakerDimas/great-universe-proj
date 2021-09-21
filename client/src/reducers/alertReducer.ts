import {ALERT_TYPES} from '../actions/types';
import {ReducerAction} from 'react';

// !! add types when will work on alerts

const {SET_ALERT, REMOVE_ALERT} = ALERT_TYPES;

const initialState: [] = [
  // {
  //     id: 1,
  //     msg: '',
  //     alertType: 'success, danger'
  // },
];

export default function(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      const alerts = state.filter((alert) => alert.id !== payload);
      return [...alerts];
    default:
      return state;
  }
}
