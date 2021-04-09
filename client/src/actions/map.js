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

export const createCountry = (data) => ({
  type: MAP_INTERACTIONS_TYPES.CREATE_COUNTRY,
  data,
});

export const updateCountryData = (data) => ({
  type: MAP_INTERACTIONS_TYPES.UPDATE_COUNTRY,
  data,
});

export const deleteCountryData = (data) => ({
  type: MAP_INTERACTIONS_TYPES.DELETE_COUNTRY,
  data,
});
