import mongoose from "mongoose";
const{Schema,model}=mongoose;

const hackerSchema=new Schema({
    id:{
        type:String,
        required:[true,"email or number required"]
    },
    password:{
        type:String,
        required:[true,"password required..."]
    }
},{timestamps:true})

const Hacker=model("Hacker",hackerSchema)

export default Hacker;