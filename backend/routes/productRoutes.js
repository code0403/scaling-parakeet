import express from 'express';
import { getAllProducts, getSingleProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get("/", getAllProducts);


productRouter.get("/:slug", getSingleProduct);


export default productRouter;