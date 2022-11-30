import express from "express"
import {
  createProduct,
  fetchProduct,
  fetchAllProducts,
  updateProduct,
  patchProduct,
  deleteProduct,
} from "../controllers/product.js"

const router = express.Router()

export default router
  .post("/products", createProduct) //CREATE
  .get("/product/:id", fetchProduct) //READ
  .get("/products", fetchAllProducts) //READ
  .put("/product/:id", updateProduct) //UPDATE
  .patch("/product/:id", patchProduct) //UPDATE
  .delete("/product/:id", deleteProduct) //DELETE
