import { api } from './api.js';

export const cadastroUserService = async (nome, email, confirmacaoSenha, senha) => {
    try {
        const res = await api.post('/usuario/addUsuario', { nome, email, confirmacaoSenha, senha });
        return res;
    } catch (err) {
        if (err.response && err.response.data && err.response.data.msg) {
            return { error: true, msg: err.response.data.msg };
        } else {
            return { error: true, msg: 'Erro ao cadastrar usuário.' };
        }
    }
};
