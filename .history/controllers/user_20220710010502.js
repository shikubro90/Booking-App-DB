import Users from "../models/Users";



//Update User
export const updateUser = async (req,res,next)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateHotel)

    }catch(err){
        next(err)
    }
}

//DeleteUser
export const deleteUser = async (req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("updateHotel");
    }catch(err){
        next(err)
    }
}

// GetUser
export const getUser = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel)
    }catch(err){
        next(err)
    }
}

//GetAllUser
export const getAllUser = async (req,res,next)=>{
    try{
        const users = await Users.find(
            req.params.id
        );
        res.status(200).json(users)
    }
    catch(err){
        next(err)
    }
}

