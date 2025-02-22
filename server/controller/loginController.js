import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export default async function loginController(req,res) {
    const {email,password}=req.body;
    try {
       const SECRET_KEY="fakenewsisgood"
        const findUser=await User.findOne({email:email})

        if(findUser){
            const isValidPassword=await bcrypt.compare(password,findUser.password)
            if(!isValidPassword){
                return res.json({message:"invalid password",success:false})
            }
            const token = jwt.sign({ id: findUser._id}, SECRET_KEY, {
                expiresIn: "1h",
              });
          
              res.status(200).json({
                message: "Login successful",
                token,
                user:findUser,
                success:true
              });
            } 
        }
            catch (error) {
              res.status(500).json({ message: "An error occurred", error: error.message });
            }
    
}