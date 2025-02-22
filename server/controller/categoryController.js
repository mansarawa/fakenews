import Note from "../models/Category.js";
import CryptoJS from 'crypto-js'
import Category from "../models/Category.js";
async function addCategoryController(req,res) {
    const {email,category}=req.body;
    try {
        const newCategory=await Category.create({
            email,
            category,
            
        })
        return res.status(200).json({message:"note add",success:true})
    } catch (error) {
        return res.json({message:error,success:false})
    }
}

async function getCategoryController(req,res) {
    const {user}=req.params;
    
    try {
        const findCategory=await Category.find({user:user})
        if(findCategory.length > 0){
            
            return res.json({category:findCategory})
        }
        else{
            return res.status(500).json({message:"note find",success:false})
        }
       
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error,success:false})
    }
}



export {addCategoryController,getCategoryController}