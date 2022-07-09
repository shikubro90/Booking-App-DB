import express from 'express'

const router = express.Router()

router.post("/", )

//UPDATE
router.put("/:id", updateHotel)

//DELETE
router.delete("/:id", deleteHotel)
// GET
router.get("/:id", getHotel)

//GET ALL
router.get("/", getAll)


export default router;
