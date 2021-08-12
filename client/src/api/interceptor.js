import axios from 'axios';
import CONSTANTS from '../lib/constants';

const {baseURL, ACCESS_TOKEN} = CONSTANTS;

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem(ACCESS_TOKEN);
      if (token) {
        config.headers = {...config.headers, Authorization: token};
      }
      return config;
    },
    (err) => Promise.reject(err),
);

instance.interceptors.response.use((response) => {
  if (response.data.access_token) {
    window.localStorage.setItem(
        CONSTANTS.ACCESS_TOKEN,
        response.data.access_token,
    );
  }
  return response;
});

export default instance;
