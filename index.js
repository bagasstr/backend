import express from "express";
// import koneksi from "./config/database.js";
// import Product from "./models/productModels.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = process.env.DB_PORT;

// (async () => {
//   try {
//     await Product.sync();
//   } catch (error) {
//     console.error(error);
//   }
// })();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", productRoutes);

app.listen(3306, () => console.log(`Server running on ${port}`));
