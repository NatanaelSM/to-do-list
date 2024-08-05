import { db } from "../config/db.js";
import bcrypt from "bcrypt";

export const addUsuario = async (req, res) => {

    // Pegar informações da requisição
    const { nome, email, senha, confirmacaoSenha } = req.body;

    // Validações
    if (!nome) return res.status(422).json({ msg: "Nome é obrigatório!" });
    if (!email) return res.status(422).json({ msg: "Email é obrigatório!" });
    if (!senha) return res.status(422).json({ msg: "Senha é obrigatório!" });
    if (!confirmacaoSenha) return res.status(422).json({ msg: "Confirmação de senha é obrigatório!" });
    if (senha != confirmacaoSenha) return res.status(422).json({ msg: "Senha e confirmação de senha precisam ser iguais!" });

    // Verificar se o email ja está em uso
    const [results] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    if (results.length > 0) return res.status(422).json({ msg: "Email já está em uso!" });

    // Criar o usuario
    try {
        const query = 'INSERT INTO usuarios(nome, email, senha) VALUES (?, ?, ?)';

        // Cria a senha com hash
        const saltRounds = 12;
        const salt = await bcrypt.genSalt(saltRounds);
        const senhaHash = await bcrypt.hash(senha, salt)

        const values = [nome, email, senhaHash];
        await db.execute(query, values);

        return res.status(201).json({ msg: "Usuario criado!" });

    } catch (err) {
        return res.status(500).json({ msg: "Erro no servidor!" });
    }

};

export const deletarUsuario = () => {

};

export const getUsuario = () => {

};

