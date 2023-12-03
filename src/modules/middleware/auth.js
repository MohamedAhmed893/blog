import jwt from 'jsonwebtoken'
export const auth =(req,res,next)=>{
    const token =req.header('token')
    jwt.verify(token, process.env.SECERT_KEY, function(err, decoded) {
    if(err){
        res.json({message:"error in token",err})
    }else{
        req.userId =decoded.userId
        next()
    }

      });
}