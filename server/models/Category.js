import mongoose, { Schema } from "mongoose";

const noteSchema=new Schema({
    email:{
        require:true,
        type:String
    },
    category:{
        require:true,
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Category=await mongoose.model('Category',noteSchema)

export default Category