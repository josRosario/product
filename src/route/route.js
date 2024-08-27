import express from "express";
import * as product from "../controller/product.controller.js";
import { createOrder } from "../controller/order.controller.js";

const router = express.Router();

router.post('/', product.createProduct);
router.get('/getProducts', product.getProducts)
router.post('/newOrder', createOrder)

export default router;