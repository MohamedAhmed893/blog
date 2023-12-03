import express from 'express'
import { dbconnection } from './database/dbconnection.js'
import userRouter from './src/modules/users/user.router.js'
import blogRouter from './src/modules/blogs/blog.router.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app =express()
app.use(express.json())
app.use(cors())
app.use('/users',userRouter)
app.use('/blogs',blogRouter)

dbconnection()
app.listen(process.env.PORT||5000,()=>{
    console.log("server is running..........");
})