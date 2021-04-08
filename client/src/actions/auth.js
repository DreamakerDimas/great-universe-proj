import { AUTH_TYPES } from './types';

//   catch (err) {
//     const errors = err.response.data.errors;
//     if (errors) {
//       errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
//   }

export const authActionLogin = (data) => ({
  type: AUTH_TYPES.LOGIN,
  data,
});

export const authActionRegister = (data) => ({
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
