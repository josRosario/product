import Order from "../model/order.js";

export const newOrder = async (order_data) => {
    try {
        return await Order.create(order_data);
    } catch (error) {
        throw Error("Hubo un error al realizar la orden", error);        
    }
}