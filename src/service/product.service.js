import Product from "../model/product.js";

export const createProduct = async(product_data) => {
    try {
        return await Product.create(product_data);
    } catch (error) {
        throw new Error(error, error.message)        
    }
}

export const getProducts = async (req, res) => {
    try {
        return await Product.findAll()
    } catch (error) {
        throw new Error("Hubo un error al obtener los productos", error.message)    
    }
}