import express from 'express'
import { generateArticle, generateBlogTitle, generateimage, removeBcakgroundImage, removeImageObject, reviewResume } from '../controllers/aicontroller.js'
import { auth } from '../middleware/auth.js'
import { upload } from '../utils/multer.js'


const routes = express.Router()

routes.route("/generate-article").post(auth, generateArticle)
routes.route("/blogTitle").post(auth, generateBlogTitle)
routes.route("/gennerate-image").post(auth, generateimage)
routes.route("/background-remove").post(upload.single('image') ,auth, removeBcakgroundImage)
routes.route("/RemoveObject").post(upload.single('image') ,auth, removeImageObject)
routes.route("/Review-Resume").post(upload.single('resume') ,auth, reviewResume)

export default routes