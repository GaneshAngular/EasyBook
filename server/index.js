
import express from 'express'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
import {movieRouter} from './routes/movie.js'
import { theaterRouter } from './routes/theater.js'


dotenv.config()
mongoose.connect(process.env.DATABASE_URL).then(res=>{
    console.log('Connected to MongoDB')
}).catch(err=>{
    console.error("Error connecting to MongoDB")
})

const app= express()
app.use(express.json())

app.use('/movies', movieRouter)
app.use('/theater',theaterRouter)



app.listen(8000,()=>{console.log("server started");
})
