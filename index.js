import express from "express";
// import koneksi from "./config/database.js";
// import Product from "./models/productModels.js";
import cors from "cors";
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
app.use(
  cors({
    origin: "http://localhost:5174", // Atur domain yang diizinkan
    methods: "GET,PUT,POST,DELETE", // Atur metode HTTP yang diizinkan
    optionsSuccessStatus: 200, // Atur kode status untuk opsi pra-penerbangan (Preflight)
    credentials: true, // Izinkan pengiriman kredensial (cookie, header otentikasi, dll.)
  })
);

app.use("/", productRoutes);

app.listen(3306, () => console.log(`Server running on ${port}`));
