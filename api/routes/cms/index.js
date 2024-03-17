import express from "express";
import studentRoutes from "./student.routes.js"
import contactRoutes from "./contact.routes.js"

const router = express.Router()

router.use('/students', studentRoutes)
router.use('/contacts', contactRoutes)

export default router
