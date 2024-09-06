import express from 'express'

import { editProfile, getProfile } from '../controllers/ProfileController.js'

const router = express.Router()

router.get("/profile/:id",getProfile)
router.put("/editprofile/:id",editProfile)


export default router