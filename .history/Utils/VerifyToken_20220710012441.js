import jwt  from "jsonwebtoken";
import createError from "./error";

export const verifyToken = (req.res.next)=>{
    
    const token = req.cookie.access_token;
    
    if(!token){
        return next(createError(401, "Your are't authenticate"))
    }
}