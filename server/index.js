import express from "express";
import rotasUsuario from "./routes/usuarioRota";
import "dotenv/config.js";

const PORT = process.env.PORT || 3000;
const app = express();

// Usando as rotas
app.use("/", rotasUsuario);


app.listen(PORT, () => {
    console.log("Server rodando na porta " + PORT);
})