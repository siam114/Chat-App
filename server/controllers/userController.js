import User from "../models/User";

//signup a new user
export const signup = async (req, res) => {
   const {fullName, email, password, bio} = req.body;

   try {
    if(!fullName || !email || !password || !bio){
        return res.json({success:false, message: "Missing Details"})
    }

    const user = await User.findOne({email});
    
    if(user){
        return res.json({success:false, message: "User already exists"})
    }

   } catch (error) {
    
   }
}