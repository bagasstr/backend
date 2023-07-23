import express from "express";
import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
  deleteProduct,
} from "../controller/productController.js";
const router = express.Router();

router.get("/api/product", getProduct);
router.get("/api/product/:id", getProductById);
router.post("/api/product", createProduct);
router.patch("/api/product/:id", updateProduct);
router.delete("/api/product/:id", deleteProductById);
router.delete("/api/product", deleteProduct);

export default router;
