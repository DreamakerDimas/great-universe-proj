import http from '../interceptor';

export const login = (data) => http.post('/api/auth/login', data);
export const register = (data) => http.post('/api/auth/register', data);
