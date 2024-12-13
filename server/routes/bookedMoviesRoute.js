

import express from "express";
import { bookMovie, getBookedMovies, getBookedMoviesByMovie, getBookedMoviesByTheater, getBookedMoviesByUser } from "../controller/bookedMovies.js";

const bookingRouter=express.Router()

bookingRouter.get('/',getBookedMovies)
bookingRouter.get('/movie/:id',getBookedMoviesByMovie)
bookingRouter.get('/user/:id',getBookedMoviesByUser)
bookingRouter.get('/theater/:id',getBookedMoviesByTheater)
bookingRouter.post('/',bookMovie)


export{
    bookingRouter
}