import db from "../config/connection.js"
import * as sequelize from "sequelize";

const Address = db.define("address", {
    id:{
        type: sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    street:{
        type:sequelize.DataTypes.STRING
    },
    street_number:{
        type:sequelize.DataTypes.STRING
    },
    sector:{
        type:sequelize.DataTypes.STRING
    },
    city:{
        type:sequelize.DataTypes.STRING
    },
    enabled:{
        type:sequelize.DataTypes.BOOLEAN,
        defaultValue:true
    },
    person_id: {
        type: sequelize.DataTypes.INTEGER
    }
});
export default Address;