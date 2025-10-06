import express from 'express'
import { generateArticle, generateBlogTitle, generateimage } from '../controllers/aicontroller.js'
import { auth } from '../middleware/auth.js'


const routes = express.Router()

routes.route("/generate-article").post(auth, generateArticle)
routes.route("/blogTitle").post(auth, generateBlogTitle)
routes.route("/gennerate-image").post(auth, generateimage)

export default routes