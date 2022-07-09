import express from 'express'

import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js'
import { verifyToken } from '../Utils/VerifyToken.js'

const router = express.Router()

router.post("/", updateUser)

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("Hello user you are login!")
})

//UPDATE
router.put("/:id", deleteUser)

//DELETE
router.delete("/:id", getUser)
// GET
router.get("/", getAllUser)


export default router;
