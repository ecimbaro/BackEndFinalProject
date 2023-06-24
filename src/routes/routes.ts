import express from "express";
const router = express.Router();
import { AddProduct, deleteProduct, getProducts } from "../controllers/controllers";

router.post("/add", AddProduct);
router.get('/show', getProducts)
router.delete('/delete/:id', deleteProduct)

export default router;
