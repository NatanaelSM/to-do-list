import { db } from "../config/db.js";

export const addUsuario = async (req, res) => {

    const { nome, email, senha, confirmacaoSenha } = req.body;

    // Validações
    if (!nome) return res.status(422).json({ msg: "Nome é obrigatório!" });
    if (!email) return res.status(422).json({ msg: "Email é obrigatório!" });
    if (!senha) return res.status(422).json({ msg: "Senha é obrigatório!" });
    if (!confirmacaoSenha) return res.status(422).json({ msg: "Confirmação de senha é obrigatório!" });
    if (senha != confirmacaoSenha) return res.status(422).json({ msg: "Senha e confirmação de senha precisam ser iguais!" });

    // Criar o usuario
    try {

        const query = 'INSERT INTO usuarios(nome, email, senha) VALUES (?, ?, ?)';
        const values = [nome, email,senha];
        
        await db.execute(query,values);

        return res.status(201).json({ msg: "Usuario criado!" })

    } catch (err) {
        return res.status(500).json({ msg: "Erro no servidor!" })
    }

};

export const deletarUsuario = () => {

};

export const getUsuario = () => {

};

