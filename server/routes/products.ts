import express from "express";
import {
  createNewProduct,
  getAllProducts,
  productsByCategory,
} from "../controllers/products/productsActions"; 

const router = express.Router();

router.get("/getAllProducts", getAllProducts);
router.get("/:category", productsByCategory);
router.post("/createProduct", createNewProduct)

export default router;
