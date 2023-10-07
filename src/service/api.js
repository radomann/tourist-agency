import axios from 'axios';
import { data } from 'jquery';

const bcUrl = 'http://sreckokreckovic.pythonanywhere.com'

export const axiosInstance = axios.create({
  // baseURL: import.meta.env.REACT_APP_API_BASE_URL,
  // baseURL: 'http://sreckokreckovic.pythonanywhere.com',
  baseURL: bcUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (request) => {
    // console.log('Starting Request', JSON.stringify(request, null, 2));
    return request;
  },
  (error) => {
    // console.error('Request Error:', error);

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('Response:', JSON.stringify(response, null, 2));
    return response;
  },
  (error) => {
    // console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export const registerBackend = axios.create({
  baseURL: bcUrl,
  timeout: 5000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',

  },
});

export const sendToken = axios.create({
  baseURL: bcUrl,
  timeout: 5000,
  withCredentials: false,
  headers: { 
    'Content-Type': 'application/json',
  },
});

// export const getDetail = () => axios.use({
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: 'http://sreckokreckovic.pythonanywhere.com/api/user/profile/',
//     headers: { 
//       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NTQxNDk2LCJpYXQiOjE2OTY1Mzc4OTYsImp0aSI6IjVmNWZkNDUwYjQzOTQ5MWI4YTFiYzk1OWJjZmUwMmEwIiwidXNlcl9pZCI6NDR9.Woh_kwzwFMnYgGFZh_yB4kuhongKwvM53BxLJPVJtb0'
//     }
  

// })

