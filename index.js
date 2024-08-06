import express, { response } from "express";
import mongoose from "mongoose";
import Blog from "./models/blogModel.js"
import "dotenv/config"
import { json } from "stream/consumers";
const app = express();
app.use(express.json());
app.get("/add",async(req,res)=>{
  try{
    const response=await Blog.create({
        title: "blog-title-6",
        description: "blog description 2"
    });
    res.send("data ayo")
  //  console.json(response);
}
catch(err){
    console.log(err);
}
  
});
app.get("/blog/:id",async(req,res)=>{
    try{
    const {id} =req.params;
   const response= await Blog.findById(id);
res.send(response);

    }catch(err){
        console.log(err);
        res.send(200).json({err})
    }
});
app.listen(8000,async()=>{
    console.log("server is running in port 8000");
    try{

    
    await mongoose.connect(process.env.DB_CONNECTION_URL);
    console.log("connected to database");
}catch(err){
    console.log(err);
}
});