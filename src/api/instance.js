import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('jwt-token');

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    authorization: token ? `Bearer ${token}`: ''
  },
});