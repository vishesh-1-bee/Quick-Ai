import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { clerkMiddleware, requireAuth } from '@clerk/express'
import routes from './routes/airoutes.js'
import connectCloudnary from './utils/cloudnary.js'
const app = express()
//function to connect eith cloudnary
await connectCloudnary()
const PORT = 3002
app.use(clerkMiddleware())

//code for cors options 
const corsOption = {
    origin: "http://localhost:5173/",
    methods: "GET , POST , PUT , PATCH",
    credential: true
}
app.use(cors(corsOption))
app.use(express.json())

app.get('/', (req, res) => {
    console.log("server is running");
    res.status(200).send("hellow from the server")

})

//adding th protected routes
app.use(requireAuth())
//here all the routes are protected
app.use("/api/ai", routes)
app.listen(PORT, () => {
    console.log(`server is running on the  http://localhost:${PORT}`);

})
