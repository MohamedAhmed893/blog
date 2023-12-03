import mongoose from "mongoose";

const blogSchema=mongoose.Schema({
    title:String ,
    description:String ,
    createdBy:{
        type:mongoose.Types.ObjectId ,
        ref:'user'
    }
},{timestamps:true})

export const blogModel =mongoose.model('blog',blogSchema)