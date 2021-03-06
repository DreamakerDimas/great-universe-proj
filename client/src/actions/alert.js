import * as uuid from 'uuid';
import {ALERT_TYPES} from './types';

const {SET_ALERT, REMOVE_ALERT} = ALERT_TYPES;

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: {msg, alertType, id},
  });

  setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout);
};
