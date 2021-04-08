import http from '../interceptor';

export const login = (data) => http.post('/auth/login', data);
export const register = (data) => http.post('/auth/register', data);
export const getUser = () => http.get('/users/getUser');
export const getZoneData = (data) => http.get(`/zones/${data}`);
export const updateZoneData = (data) => http.update(`/zones/${data.id}`, data.updateData);
export const deleteZoneData = (data) => http.delete(`/zones/${data}`);