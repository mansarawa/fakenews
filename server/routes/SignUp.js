import express from 'express'
import signUpController from '../controller/signUpController.js'

const SignUp=express.Router()

SignUp.post('/signup',signUpController)

export default SignUp