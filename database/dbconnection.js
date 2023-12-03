import mongoose from "mongoose";

export const dbconnection=()=>{
    mongoose.connect(process.env.DB_CONECTION).then(()=>{
        console.log("database connected .");
    }).catch((err)=>{
        console.log("error in connect. ",err);
    })
}