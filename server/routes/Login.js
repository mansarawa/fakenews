import express from 'express'
import loginController from '../controller/loginController.js'


const Login=express.Router()

Login.post('/login',loginController)

export default Login