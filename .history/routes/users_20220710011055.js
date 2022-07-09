import express from 'express'
import { deleteUser, getUser, updateUser } from '../controllers/user'

const router = express.Router()

router.post("/", updateUser)

//UPDATE
router.put("/:id", deleteUser)

//DELETE
router.delete("/:id", getUser)
// GET
router.get("/:id", getAl)

//GET ALL
router.get("/", getAll)


export default router;
