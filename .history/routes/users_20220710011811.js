import express from 'express'

import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user'

const router = express.Router()

router.post("/", updateUser)

//UPDATE
router.put("/:id", deleteUser)

//DELETE
router.delete("/:id", getUser)
// GET
router.get("/", getAllUser)


export default router;
