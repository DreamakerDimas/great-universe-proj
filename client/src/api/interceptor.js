import axios from 'axios';
import CONSTANTS from '../lib/constants/index';
import history from '../browserHistory';

const { baseURL, ACCESS_TOKEN } = CONSTANTS;

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers = { ...config.headers, Authorization: token };
    }
    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.token) {
      window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, response.data.token);
    }
    return response;
  },
  (err) => {
    const pathname = history.location.pathname;
    console.log(pathname, err);
  }
);

export default instance;
