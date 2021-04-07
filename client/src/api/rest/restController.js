import http from '../interceptor';

export const login = (data) => http.post('/auth/login', data);
export const register = (data) => http.post('/auth/register', data);
export const getUser = () => http.get('/users/getUser');
