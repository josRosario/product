import Product from "../model/product.js";

export const createProduct = async(product_data) => {
    try {
        return await Product.create(product_data);
    } catch (error) {
        throw new Error(error, error.message)        
    }
}