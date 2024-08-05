import mysql from "mysql2";
import dotenv from 'dotenv/config';

const PASSWORD = process.env.PASSWORD_DB;
const USER = process.env.USER_DB;
const HOST = process.env.HOST_DB;
const PORT = process.env.PORT_DB;
const DATABASE = process.env.DATABASE_DB;

export const db = mysql.createConnection({
    database: DATABASE,
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: PORT || 3306
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL.');
});