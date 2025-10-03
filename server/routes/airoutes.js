import express from 'express'
import { generateArticle } from '../controllers/aicontroller.js'
import { auth } from '../middleware/auth.js'


const routes = express.Router()

routes.route("/generate-article").get(auth, generateArticle)

export default routes