import express from "express";
// import koneksi from "./config/database.js";
import Product from "./models/productModels.js";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.DB_PORT || 5050;

(async () => {
  await Product.sync();
})();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", productRoutes);

app.listen(port, () => console.log(`Server running on ${port}`));
