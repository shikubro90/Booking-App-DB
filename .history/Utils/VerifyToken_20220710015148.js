import jwt  from "jsonwebtoken";
import createError from "./error.js";

export const verifyToken = (req,res,next)=>{
    
    const token = req.cookies.access_token;
    
    if(!token){
        return next(createError(401, "Your are't authenticate!"));
    }

    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(createError(403, "Your are not authenticated!"))
        req.user = user;
        next() 
    })
}

export const verifyUser = ((req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.id === req.par)
    })
})