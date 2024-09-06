import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import dbConnection from './db.js'
import { isAuthenticated } from './authentication/auth.js'
dotenv.config()
dbConnection()
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())


app.use("/user",userRoutes)
app.use("/profile",isAuthenticated,profileRoutes)

app.get("/",(req,res)=>{
    res.status(200).send({message:"API WORKING"})
})

app.listen(PORT,()=>{
    console.log(`App is listening to PORT ${PORT}`)
})