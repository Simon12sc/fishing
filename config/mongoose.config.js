import mongoose from "mongoose";


export default async function connectDb(){
    await mongoose.connect(process.env.MONGOOSE_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log(`mongodb connected with server: ${data.connection.host}`);
    })
}