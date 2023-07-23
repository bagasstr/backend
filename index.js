import express from "express";
// import koneksi from "./config/database.js";
// import Product from "./models/productModels.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = process.env.PORT || 5050;
// (async () => {
//   await Product.sync();
// })();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", productRoutes);

app.listen(port, () => console.log(`Server running on ${port}`));
