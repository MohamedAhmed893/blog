import { userModel } from "../../../database/models/user.model.js"
import bcrypt from 'bcrypt'
import Joi from "joi"
import { genrateToken } from "../../utils/genrateToken.js"



export const signUp = async (req, res) => {
    const { name, gmail, password } = req.body

        let email = await userModel.findOne({ gmail })
        if (email) {
            res.json({ message: "Email already in use" })
    
        } else {
            bcrypt.hash(password, Number(process.env.ROUND), async function (err, hash) {
                let user = await userModel.insertMany({ name, gmail, password:hash })
                res.json({ message: "success", user })
            });
    
        }
 
  

}


export const signIn =async (req,res)=>{
    const { gmail, password } = req.body
    let user = await userModel.findOne({ gmail })
    if(user){
        const match = await bcrypt.compare(password, user.password);
        if(match){
       let token =genrateToken({name:user.name,role:user.role ,userId:user._id})
            res.json({message:"login",token})
        }else{
            res.json({message:"incorrent password"})
        }
    }else{
        res.json({message:"Account Not Found"})
    }
}

