import express from 'express'

import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js'
import { verifyToken, verifyUser } from '../Utils/VerifyToken.js'

const router = express.Router()

router.post("/", updateUser)

router.get("/checkauthenticate", verifyToken, (req,res,next)=>{
    res.send("Hello user you are login!")
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("Hello user you are verified you can delete your account!")
})

router.get("/checkadmin/:id", verifyUser, (req,res,next)=>{
    res.send("Hello user you are verified you can delete your account!")
})

//UPDATE
router.put("/:id", deleteUser)

//DELETE
router.delete("/:id", getUser)
// GET
router.get("/", getAllUser)


export default router;
