import express from 'express'
import { Register } from '../Controller/authController.js'

const route = express.Router()

route.get("/register", Register)

export default route

// http://localhost:5000/api/auth/register