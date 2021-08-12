import {USER_TYPES} from './types';

export const getUser = (data) => ({
  type: USER_TYPES.GET_USER,
  data: data,
});

export const clearUser = () => ({
  type: USER_TYPES.CLEAR_USER,
});
