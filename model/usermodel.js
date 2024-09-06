import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
      
    },
    confirmPassword:{
        type:String,
        required:true
    },
    gender:String,
    education:String,
    age:Number,
    DOB:Date,
    contact:String
},{timestamps:true})

const Users = mongoose.model("Users",userSchema)
export default Users