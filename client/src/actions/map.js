import { MAP_INTERACTIONS_TYPES } from './types';

export const showZoneData = (data) => ({
  type: MAP_INTERACTIONS_TYPES.SHOW_DATA,
  data,
});

export const hideZoneData = () => ({
  type: MAP_INTERACTIONS_TYPES.HIDE_DATA,
});

export const getCountryData = (data) => ({
  type: MAP_INTERACTIONS_TYPES.GET_COUNTRY,
  data,
});
