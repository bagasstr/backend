import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const koneksi = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    // dialectModule: "mysql2",
  }
);
koneksi
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

export default koneksi;
