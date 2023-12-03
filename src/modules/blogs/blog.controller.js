import { blogModel } from "../../../database/models/blog.model.js"



const addBlog = async (req, res) => {
    const { title, description } = req.body
    const blogs = await blogModel.insertMany({ title, description, createdBy:req.userId })
    res.json({ message: "success", blogs })
}

const getAllBlogs = async (req, res) => {
    let blogs = await blogModel.find().populate('createdBy','name ')
    res.json({ message: "success", blogs })
}
const getUserBlogs = async (req, res) => {
    const {id} =req.params
    let blogs = await blogModel.find({createdBy:id})
    res.json({ message: "success", blogs })
}

const updateBlog = async (req, res) => {
    const { title, description, _id } = req.body
    const blog = await blogModel.findByIdAndUpdate({ _id }, { title, description }, { new: true })
    if (blog) {
        res.json({ message: "success", blog })
    } else {
        res.json({ message: "Blog Not Found" })
    }

}

const deleteBlog = async (req, res) => {
    const { _id } = req.body

    const blog = await blogModel.findByIdAndDelete({ _id })
    if (blog) {
        res.json({ message: "success", blog })
    } else {
        res.json({ message: "Blog Not Found" })
    }
}
export {
    addBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog ,
    getUserBlogs
}