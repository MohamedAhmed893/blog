import express from 'express'
import { signIn, signUp } from './user.controller.js'
import { signInschema, signUpschema } from './user.validation.js'
import { validation } from '../middleware/validation.js'

const userRouter= express.Router()

userRouter.post('/signup',validation(signUpschema),signUp)
userRouter.post('/signin',validation(signInschema),signIn)

export default userRouter