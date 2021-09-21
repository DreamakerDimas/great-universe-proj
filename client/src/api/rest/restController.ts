import http from '../interceptor';
import {ILoginValues, IRegistrationValues} from '../../actions/auth';
import {CreateCountryPayload, UpdateCountryPayload} from '../../actions/map';
import {CreateTagPayload, DeleteTagPayload, UpdateTagPayload} from '../../actions/tagsEditor';

export const login = (data: ILoginValues) => http.post('/auth/login', data);
export const register = (data: IRegistrationValues) => http.post('/auth/register', data);
export const getUser = () => http.get('/users/getUser');

export const getZoneData = (zoneName: string) => http.get(`/zones/${zoneName}`);
export const createZone = (data: CreateCountryPayload) => http.post('/zones/', data);
export const updateZone = (data: { id: string, updateData: UpdateCountryPayload }) =>
  http.patch(`/zones/${data.id}`, data.updateData);
export const deleteZone = (zoneId: string) => http.delete(`/zones/${zoneId}`);

export const getAllTags = () => http.get('/tags/');
export const createTag = (data: CreateTagPayload) => http.post('/tags/', data);
export const updateTag = (data: UpdateTagPayload) => http.post('/tags/update', data);
export const deleteTag = (data: DeleteTagPayload) => http.post('/tags/delete', data); // !!! where data = [strings of code_name]
