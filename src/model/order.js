import db from "../config/connection.js";
import * as sequelize from "sequelize";

const Order = db.define("orders", {
    id:{
        type: sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    person_id: {
        type: sequelize.DataTypes.INTEGER
    },
    product_id: {
        type: sequelize.DataTypes.INTEGER
    }
})

export default Order;