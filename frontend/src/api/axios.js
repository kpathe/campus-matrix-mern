import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true, // ⬅️ this enables cookies to be sent with requests
});

export default instance;
