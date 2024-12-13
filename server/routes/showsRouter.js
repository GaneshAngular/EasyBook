import express from 'express';
import { getShows, getShowsByMovie, getShowsByTheater, organiseShow,deleteShow, getShowsByTime, updateShow, getShowsByMovieCityTheater } from '../controller/showsController.js';

const showsRouter=express.Router()

showsRouter.get('/',getShows)
showsRouter.get('/movie/:id',getShowsByMovie)
showsRouter.get('/:mid/theater/:tid',getShowsByMovieCityTheater)
showsRouter.get('/book/:tid/:mid/:time',getShowsByTime)
showsRouter.get('/theater/:id',getShowsByTheater)
showsRouter.post('/',organiseShow)
showsRouter.delete('/:id',deleteShow)
showsRouter.patch('/:id',updateShow)

export{
    showsRouter
}