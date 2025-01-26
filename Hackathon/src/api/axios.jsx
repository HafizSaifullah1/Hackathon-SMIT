import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:2000', // Your backend URL
  headers: {
    "Content-Type": "application/json"
  }
});

export default apiInstance;
