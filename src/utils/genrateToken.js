
import jwt from 'jsonwebtoken'

export const genrateToken =(payload)=>{
    let token =jwt.sign(payload,process.env.SECERT_KEY)
    return token
}