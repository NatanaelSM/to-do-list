import { db } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

export const login = async (req, res) => {

    // Pegar informações da requisição
    const { email, senha } = req.body

    // Validações
    if (!email) return res.status(422).json({ msg: "Email é obrigatório!" });
    if (!senha) return res.status(422).json({ msg: "Senha é obrigatório!" });

    // Verificar se o usuario existe
    const [results] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email])
    if (results.length == 0) return res.status(404).json({ msg: "Usuário não cadastrado!" });

    // Verificar se a senha é compativel
    const verificarSenha = await bcrypt.compare(senha, results[0].senha);
    if (!verificarSenha) return res.status(422).json({ msg: "Senha inválida!" });

    //Gerar o token
    try {
        const secret = process.env.SECRET;
        
        const token = jwt.sign(results[0].id, secret);

        return res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });

    } catch (err) {
        return res.status(500).json({ msg: "Erro no servidor!" });
    }

}