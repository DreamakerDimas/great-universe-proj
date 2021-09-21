import {USER_TYPES} from './types';

export const getUser = (userId: string) => ({
  type: USER_TYPES.GET_USER,
  data: userId,
});

export const clearUser = () => ({
  type: USER_TYPES.CLEAR_USER,
});
