import { USER_TYPES } from './types';

export const getUser = (data) => ({
  type: USER_TYPES.GET_USER,
  data: data,
});
