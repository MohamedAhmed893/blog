export const validation =(schema)=>{
    return (req,res,next)=>{
        const {error} =schema.validate(req.body ,{abortEarly:false})
        if(!error){  
            next()
         }else{
            res.json(error.details)
        }
    }
}