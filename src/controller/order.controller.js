import * as order from "../service/order.service.js"

export const createOrder = async (data) => {
    const newData = JSON.parse(data);
    const obj = {
        person_id: newData.person_id,
        product_id: newData.product_id
    }

    try {
        await order.newOrder(obj)
    } catch (error) {
        console.log(error)
    }

    console.log(data, 'this is the data')
}