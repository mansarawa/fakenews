import express from 'express'
import { addCategoryController,  getCategoryController } from '../controller/categoryController.js'
import verify from '../middleware/verify.js'

const addCategory=express.Router()
addCategory.post('/addCategory',addCategoryController)

const getCategory=express.Router()
getCategory.get('/getCategory/:user',verify,getCategoryController)



export  {addCategory,getCategory,}