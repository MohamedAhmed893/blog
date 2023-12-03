
import Joi from "joi"
const addBlogSchema=Joi.object({
    title:Joi.string().min(5).max(100).required(),
    description:Joi.string().min(5).max(100).required(),
    createdBy:Joi.string().hex().length(24).required()
})



export {
addBlogSchema
}