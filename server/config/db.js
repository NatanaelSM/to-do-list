import mysql from 'mysql2/promise';
import 'dotenv/config'

const PASSWORD = process.env.PASSWORD_DB;
const USER = process.env.USER_DB;
const HOST = process.env.HOST_DB;
const PORT = process.env.PORT_DB;
const DATABASE = process.env.DATABASE_DB;

export const db = await mysql.createConnection({
    database: DATABASE,
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: PORT || 3306
});