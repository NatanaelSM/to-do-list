import { api } from './api.js';

export const loginService = async (email, senha) => {
  try {
    const res = await api.post('/auth/login', { email, senha });
    return res;
  } catch (err) {
    console.log(err.response.data.msg);
  }
};