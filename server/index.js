import express from "express";
import "dotenv/config.js";

const PORT = process.env.PORT || 3000
const app = express();


app.listen(PORT, () => {
    console.log("Server rodando na porta " + PORT);
})