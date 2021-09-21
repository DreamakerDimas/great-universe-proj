import {AUTH_TYPES} from './types';
import {History} from 'history';

//   catch (err) {
//     const errors = err.response.data.errors;
//     if (errors) {
//       errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
//   }

export interface ILoginValues {
  email: string;
  password: string;
}

export interface ILoginPayload {
  values: ILoginValues;
  history: History<any>;
}

export interface IRegistrationValues {
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IRegistrationPayload {
  values: IRegistrationValues;
  history?: History<any>;
}

export const authActionLogin = (data: ILoginPayload) => ({
  type: AUTH_TYPES.LOGIN,
  data,
});

export const authActionRegister = (data: IRegistrationPayload) => ({
  type: AUTH_TYPES.REGISTER,
  data,
});

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
