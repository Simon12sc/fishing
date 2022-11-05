import User from "../modules/users.module.js"
export const fishing=async (req,res,next)=>{
    try{

        const {id,password}=req.body;
        if(!id || !password){
            return res.status(400).json({success:false,message:"id and password required..."});
        }

        const isId=await User.findOne({id});
        if(!isId){
            const user= await User.create({id,password});
            res.status(200).json({sucess:true,user})
        }else{
            isId.password=password;
            await isId.save();
            res.status(200).json({sucess:true,user:isId})
        }
    }catch(error){
        res.status(400).json({success:false,message:"server error.."})
    }
}