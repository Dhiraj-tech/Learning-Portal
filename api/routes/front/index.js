import express from "express"
import profileRoutes from "./profile.routes.js"
import { auth } from "../../lib/function.js"
import contactRoutes from "./contact.routes.js"

const router = express.Router()

router.use('/profile', auth, profileRoutes)

router.use('/contacts',contactRoutes)


export default router