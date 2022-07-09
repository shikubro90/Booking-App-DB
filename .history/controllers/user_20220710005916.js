import Users from "../models/Users";



//Update User
export const updateHotel = async (req,res,next)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateHotel)

    }catch(err){
        next(err)
    }
}

//Delete
export const deleteHotel = async (req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("updateHotel");
    }catch(err){
        next(err)
    }
}

// Get
export const getHotel = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel)
    }catch(err){
        next(err)
    }
}

//Get All
export const getAll = async (req,res,next)=>{
    try{
        const hotels = await Hotel.find(
            req.params.id
        );
        res.status(200).json(hotels)
    }
    catch(err){
        next(err)
    }
}

