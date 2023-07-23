import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// console.log(dotenv);

const koneksi = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

export default koneksi;
