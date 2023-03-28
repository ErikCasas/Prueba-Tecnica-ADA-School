import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3002',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')?.toString().replace(/"/g, '')}`
  },
});
