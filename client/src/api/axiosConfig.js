import axios from 'axios';

/* Setting the baseURL for the api and setting the authorization header for the api. */
const api = axios.create({
  baseURL: 'http://localhost:3002',
});

const setAuthToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token.replace(
      /"/g,
      ''
    )}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

setAuthToken();

export { api, setAuthToken };
