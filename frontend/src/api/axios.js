import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // ⬅️ this enables cookies to be sent with requests
});

export default instance;
