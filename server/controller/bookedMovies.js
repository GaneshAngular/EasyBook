import { bookedMoviesModel } from "../model/bookedMoviesModel.js"

const getBookedMoviesByUser=async(req,res)=>{
    const id=req.params.id
    return res.send(await bookedMoviesModel.find({user_id:id}))
}

const getBookedMovies=async(req,res)=>{
   
    return res.send(await bookedMoviesModel.find({}))
}
const getBookedMoviesByMovie=async(req,res)=>{
    const id=req.params.id
    return res.send(await bookedMoviesModel.find({movie_id:id}))
}
const getBookedMoviesByTheater=async(req,res)=>{
    const id=req.params.id
    return res.send(await bookedMoviesModel.find({theater_id:id}))
}

const bookMovie=async(req,res)=>{
    const data=req.body
       await bookedMoviesModel.create(data)
    return res.status(201).send(data)
}

const cancelBookedMovie=async(req,res)=>{
}

export{
    getBookedMoviesByUser, getBookedMoviesByMovie, getBookedMoviesByTheater, bookMovie, cancelBookedMovie, getBookedMovies
}