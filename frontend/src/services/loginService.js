import { api } from './api.js';

export const loginService = async (email, senha) => {
  try {
    const res = await api.post('/auth/login', { email, senha });
    return res;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.msg) {
      return { error: true, msg: err.response.data.msg };
    } else {
      return { error: true, msg: `Erro ao fazer login. ${res.response}` };
    }
  }
};