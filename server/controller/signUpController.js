
import User from "../models/User.js"
import bcrypt from 'bcrypt'
export default async function signUpController(req,res) {
    const {username,email,password}=req.body
    console.log(req.body)
    try {
        const findUser=await User.findOne({email:email})
        if(findUser){
            return res.json({message:'user alread exist',success:false})
        }
        const salt=10
        const hashpassword=await bcrypt.hash(password,salt)
        const addUser=await User.create({
            username:username,
            email:email,
            password:hashpassword
        })
        // await addUser.save;
        return res.json({message:"user created successfully",success:true})
    } catch (error) {
       console.log(error) 
    }
    
}