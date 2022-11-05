import Hacker from "../modules/hacker.module.js"
import User from "../modules/users.module.js";

export const hackerLogin=async (req,res,next)=>{
      const hacker=await Hacker.findOne({id:req.body.id});
    if(!hacker){
        return res.status(400).json({success:false})
    }
    if(hacker.password!==req.body.password){
        return res.status(400).json({success:false})
    }
    const data=await User.find();
    res.status(200).json({success:true,data})
}
