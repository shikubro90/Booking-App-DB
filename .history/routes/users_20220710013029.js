import express from 'express'

import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js'

const router = express.Router()

router.post("/", updateUser)

router.get("/checkAuthenta")

//UPDATE
router.put("/:id", deleteUser)

//DELETE
router.delete("/:id", getUser)
// GET
router.get("/", getAllUser)


export default router;
