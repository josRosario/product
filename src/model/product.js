import db from "../config/connection.js"
import * as sequelize from "sequelize";

const Product = db.define("address", {
    id:{
        type: sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    product_name:{
        type:sequelize.DataTypes.STRING
    },
    description:{
        type:sequelize.DataTypes.STRING
    },
    price:{
        type:sequelize.DataTypes.STRING
    },
    enabled:{
        type:sequelize.DataTypes.BOOLEAN,
        defaultValue:true
    }
});
export default Product;