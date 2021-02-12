import axios from 'axios';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USER,
  AUTH_ERROR,
} from './types';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

// export const register = ({ name, email, password }) => async (dispatch) => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   const body = JSON.stringify({ name, email, password });

//   try {
//     const res = await axios.post('/api/auth/register', body, config);

//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data,
//     });
//   } catch (err) {
//     const errors = err.response.data.errors;
//     if (errors) {
//       errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
//     }
//     dispatch({
//       type: REGISTER_FAIL,
//     });
//   }
// };

// export const login = ({ email, password }) => async (dispatch) => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   const body = JSON.stringify({ email, password });

//   try {
//     const res = await axios.post('/api/auth/login', body, config);
//     console.log(res.data);
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data,
//     });
//   } catch (err) {
//     const errors = err.response.data.errors;
//     dispatch({
//       type: LOGIN_FAIL,
//     });
//   }
// };

export const getUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth/getUser');
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    setAuthToken();
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
