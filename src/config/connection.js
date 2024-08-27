import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config();

const db = new Sequelize(process.env.db_name, process.env.db_user, process.env.db_password,{
    host:process.env.db_host,
    dialect:'mysql'
})

export default  db;