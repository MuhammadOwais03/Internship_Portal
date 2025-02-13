import express from "express"
import cors from "cors"
import { uploadOnCloudinary } from "./utils/cloudinary.js"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))


//Routes
import { router } from "./routes/form.route.js"

app.use('/internship', router)

app.get('/', (req, res)=>{
    res.send("Hello")
})

export { app }