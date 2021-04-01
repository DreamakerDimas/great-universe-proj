import { MAP_INTERACTIONS_TYPES } from './types';

export const getCountryData = (data) => {
  return {
    type: MAP_INTERACTIONS_TYPES.GET_COUNTRY,
    data: data,
  };
};
