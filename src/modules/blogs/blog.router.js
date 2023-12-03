import express from "express"
import * as blogController from "./blog.controller.js"
import { auth } from "../middleware/auth.js"
import { validation } from "../middleware/validation.js"
import { addBlogSchema } from "./blog.validation.js"

const blogRouter =express.Router()

blogRouter.post('/',validation(addBlogSchema),auth,blogController.addBlog)
blogRouter.get('/',auth,blogController.getAllBlogs)
blogRouter.get('/:id',auth,blogController.getUserBlogs)
blogRouter.put('/',auth,blogController.updateBlog)
blogRouter.delete('/',auth,blogController.deleteBlog)


export default blogRouter