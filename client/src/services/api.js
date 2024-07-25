import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);
export const fetchTransactions = () => API.get('/transactions');
export const createTransaction = (data) => API.post('/transactions', data);
export const updateTransaction = (id, data) => API.patch(`/transactions/${id}`, data);
export const deleteTransaction = (id) => API.delete(`/transactions/${id}`);
export const fetchAccounts = () => API.get('/accounts');
export const createAccount = (data) => API.post('/accounts', data);
export const updateAccount = (id, data) => API.patch(`/accounts/${id}`, data);
export const deleteAccount = (id) => API.delete(`/accounts/${id}`);
