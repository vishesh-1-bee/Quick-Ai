import express from 'express'
import { getPublishedData, getusercreation } from '../controllers/usercreation.js'
import { auth } from '../middleware/auth.js'


const userRoutes = express.Router()

userRoutes.route('/cretions').get(auth, getusercreation)
userRoutes.route('/publish').get(auth, getPublishedData)

export default userRoutes