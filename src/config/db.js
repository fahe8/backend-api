import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  port: DB_PORT,
  dialectOptions: {
    ssl: false, // Cambia esto si necesitas SSL
  },
});

export default sequelize;
