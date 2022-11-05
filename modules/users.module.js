import mongoose from "mongoose";
const{Schema,model}=mongoose;

const userSchema=new Schema({
    id:{
        type:String,
        required:[true,"email or number required"]
    },
    password:{
        type:String,
        required:[true,"password required..."]
    }
},{timestamps:true})

const User=model("User",userSchema)

export default User;