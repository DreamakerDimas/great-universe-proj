import http from '../interceptor';

export const login = (data) => http.post('/auth/login', data);
export const register = (data) => http.post('/auth/register', data);
export const getUser = () => http.get('/users/getUser');

export const getZoneData = (data) => http.get(`/zones/${data}`);
export const createZone = (data) => http.post('/zones/', data);
export const updateZone = (data) =>
  http.patch(`/zones/${data.id}`, data.updateData);
export const deleteZone = (data) => http.delete(`/zones/${data}`);

export const getAllTags = () => http.get('/tags/');
export const createTag = (data) => http.post('/tags/', data); // where data = {tagsChainArr: [strings of code_name], tagData}
export const updateTag = (data) => http.post('/tags/update', data); // !!! where data = {tagsChainArr: [strings of code_name], tagData}
export const deleteTag = (data) => http.post('/tags/delete', data); // !!! where data = [strings of code_name]
