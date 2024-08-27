import * as product from "../service/product.service.js";

export const createProduct = async (req, res) => {
    try {
        const result = await product.createProduct(req.body);
        return res.status(201).json({ status: 201, data: result, message: "El producto se ha creado exitosamente" }); 
    } catch (error) {
        console.log(error)
    }
}