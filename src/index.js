import express from "express";
import dotenv from "dotenv";
import db from "./config/connection.js";
//import router from "./route/route.js";
import bodyParser from "body-parser";
import kafkaConfig from "./config/kafkaConfig.js"; 
dotenv.config(); 
import  {createAddress, upudateAddress}  from "./controller/address.controller.js";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(router)


const port = process.env.PORT || 4001

const kafka = new kafkaConfig();



kafka.consume('addAddress', ( value) => {
        createAddress(value)

})

kafka.consume('updateAddress', (value) => {
    console.log('trying to update the data')
    upudateAddress(value)
})



try {
    await db.authenticate();
    await db.sync({alter:true});
    console.log("The connection to potgres has been stablished...")
} catch (error) {
    console.log("It has been an error to stablish the connection...", error)
    
}


app.listen(port, ( ) => {
    console.log('app running on port: ', port);
})