import express from "express";
// import koneksi from "./config/database.js";
// import Product from "./models/productModels.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// (async () => {
//   await Product.sync();
// })();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", productRoutes);

app.listen(5050, () => console.log("Server running on 4000"));
