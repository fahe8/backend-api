import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

export const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
