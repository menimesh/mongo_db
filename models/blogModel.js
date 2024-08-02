import mongoose from "mongoose";
const blogSchema=new mongoose.Schema({
    title:String,
    description:String,
});
const Blog =mongoose.model("blogs",blogSchema);
export default Blog;
