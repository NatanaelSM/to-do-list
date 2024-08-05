import express from "express";
import rotasUsuario from "./routes/usuarioRota.js";
import rotasAutenticacao from "./routes/autenticacaoRota.js";
import bodyParser from "body-parser";
import dotenv from 'dotenv/config';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());


// Usando as rotas
app.use("/auth", rotasAutenticacao)
app.use("/usuario", rotasUsuario);


app.listen(PORT, () => {
    console.log("Server rodando na porta " + PORT);
})