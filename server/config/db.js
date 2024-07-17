import mysql from "mysql";
import "dotenv/config.js";

const PASSWORD = process.env.PASSWORD_DB;
const USER = process.env.USER_DB;

export const db = mysql.createConnection({
    host: "localhost",
    user: USER,
    password: PASSWORD,
    port: "3306",
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL.');
});