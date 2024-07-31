import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
const app = express();
app.listen(8000,async()=>{
    console.log("server is running in port 8000");
    try{

    
    await mongoose.connect(process.env.DB_CONNECTION_URL);
    console.log("connected to database");
}catch(err){
    console.log(err);
}
});