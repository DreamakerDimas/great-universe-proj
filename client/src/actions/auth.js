import axios from 'axios';
import { AUTH_TYPES } from './types';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

//   catch (err) {
//     const errors = err.response.data.errors;
//     if (errors) {
//       errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
//   }

export const authActionLogin = (data) => {
  return {
    type: AUTH_TYPES.LOGIN_REQUEST,
    data: data,
  };
};

export const authActionRegister = (data) => {
  return {
    type: AUTH_TYPES.REGISTER_REQUEST,
    data: data,
  };
};

// export const getUser = () => async (dispatch) => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }

//   try {
//     const res = await axios.get('/api/auth/getUser');
//     dispatch({
//       type: GET_USER,
//       payload: res.data,
//     });
//   } catch (err) {
//     setAuthToken();
//     dispatch({
//       type: AUTH_ERROR,
//     });
//   }
// };
