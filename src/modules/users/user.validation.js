import Joi from 'joi'

const signUpschema =Joi.object({
    name:Joi.string().min(3).max(30).required(),
    gmail:Joi.string().email().required() ,
    password:Joi.string().min(3).max(80).required() ,
    rePassword:Joi.ref('password')
})


const signInschema =Joi.object({
    gmail:Joi.string().email().required() ,
    password:Joi.string().min(3).max(80).required()
})

export {
    signInschema ,
    signUpschema
}