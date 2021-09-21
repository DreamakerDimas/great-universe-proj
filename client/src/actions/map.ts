import {MAP_INTERACTIONS_TYPES} from './types';

export interface CreateCountryPayload {
  zone_name: string;
  disp_name: string;
  description: string;
  government_type: string;
  emblem_img: string;
  tags?: string; // TODO ARRAY?
}


export interface UpdateCountryPayload { // TODO ADD ORIGINAL zone_name ?
  zone_name: string;
  disp_name?: string;
  description?: string;
  government_type?: string;
  emblem_img?: string;
  tags?: string; // TODO ARRAY?
}

export const showZoneData = (zoneName: string) => ({
  type: MAP_INTERACTIONS_TYPES.SHOW_DATA,
  data: zoneName,
});

export const hideZoneData = () => ({
  type: MAP_INTERACTIONS_TYPES.HIDE_DATA,
});

export const getCountryData = (zoneName: string) => ({
  type: MAP_INTERACTIONS_TYPES.GET_COUNTRY,
  data: zoneName,
});

export const createCountry = (data: CreateCountryPayload) => ({
  type: MAP_INTERACTIONS_TYPES.CREATE_COUNTRY,
  data,
});

export const updateCountry = (data: UpdateCountryPayload) => ({
  type: MAP_INTERACTIONS_TYPES.UPDATE_COUNTRY,
  data,
});

export const deleteCountry = (zoneName: string) => ({
  type: MAP_INTERACTIONS_TYPES.DELETE_COUNTRY,
  data: zoneName,
});
