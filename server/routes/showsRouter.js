import express from 'express';
import { getShows, getShowsByMovie, getShowsByTheater, organiseShow,deleteShow } from '../controller/showsController.js';

const showsRouter=express.Router()

showsRouter.get('/',getShows)
showsRouter.get('/movie/:id',getShowsByMovie)
showsRouter.get('/theater/:id',getShowsByTheater)
showsRouter.post('/',organiseShow)
showsRouter.delete('/:id',deleteShow)


export{
    showsRouter
}