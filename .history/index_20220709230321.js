import  express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import authRoute from './routes/auth.js'
import hotels from './routes/hotels.js'
import rooms from './routes/rooms.js'
import users from './routes/users.js'

const app = express()
dotenv.config();

const connect = async ()=>{
    await mongoose.connect(process.env.MONGO)
    console.log("Connect Db...")
  
};

//Midelwear

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', users)
app.use('/api/hotels', hotels)
app.use('/api/rooms', rooms)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack
    });
})

app.listen(3000, ()=>{
    connect()
    console.log("Server Running !");
})
