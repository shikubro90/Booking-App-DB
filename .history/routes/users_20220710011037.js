import express from 'express'
import { updateUser } from '../controllers/user'

const router = express.Router()

router.post("/", updateUser)

//UPDATE
router.put("/:id", delete)

//DELETE
router.delete("/:id", deleteHotel)
// GET
router.get("/:id", getHotel)

//GET ALL
router.get("/", getAll)


export default router;
