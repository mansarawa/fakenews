import jwt from 'jsonwebtoken'

export default async function verify(req,res,next) {
    const token=req.header('token')
    try {
        const SECRET_KEY="fakenewsisgood"
        const decodeUser=await jwt.verify(token,SECRET_KEY)
        req.user=decodeUser
        next()
    } catch (error) {
        return res.status(500).json({message: "Token verification unsuccessful",chat:error,success:false})

    }
    
}