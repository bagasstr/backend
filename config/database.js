import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// console.log(dotenv);
// const connectionUri =
//   "mysql://uzky7huydwuqswoh:mMH6Uhmu1124pXOo8KwK@b9q2prkirvnugxpcwefq-mysql.services.clever-cloud.com:3306/b9q2prkirvnugxpcwefq";

const koneksi = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: "mysql",
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

// Call the testConnection function to check if the database connection is successful

export default koneksi;
