import express from "express";
import * as product from "../controller/product.controller.js";

const router = express.Router();

router.post('/', product.createProduct);

export default router;