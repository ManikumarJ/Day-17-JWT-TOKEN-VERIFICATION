import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/authRoute.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server connected sucessfully http://localhost:${PORT}`);
    
})
