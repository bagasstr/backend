import express from "express";
// import koneksi from "./config/database.js";
// import Product from "./models/productModels.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import handleCors from "./middleware/productMiddle.js";

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
app.use(cors(handleCors));

app.use("/", productRoutes);

app.listen(3306, () => console.log(`Server running on ${port}`));
