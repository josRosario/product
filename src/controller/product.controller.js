import * as product from "../service/product.service.js";
import kafkaConfig from "../config/kafkaConfig.js";

const kafka = new kafkaConfig();
export const createProduct = async (req, res) => {
    try {
        const result = await product.createProduct(req.body);
        const message = [
            {key:'key', value: JSON.stringify(result)}
        ]
        kafka.prodece("new-prodct", message);
        return res.status(201).json({ status: 201, data: result, message: "El producto se ha creado exitosamente" }); 
    } catch (error) {
        console.log(error)
    }
}