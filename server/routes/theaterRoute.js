import express from "express";
import { addTheater, deleteTheater, getTheaters, getTheatersById, getTheatersByMovie, getTheatersByMovieandCity, updateTheater } from "../controller/theaterController.js";

const theaterRouter = express.Router();

theaterRouter.get("/",getTheaters);
theaterRouter.get("/:id", getTheatersById);
theaterRouter.get('/theater/:id/:city',getTheatersByMovieandCity)
theaterRouter.get("/movie/:id", getTheatersByMovie);
theaterRouter.post("/", addTheater);
theaterRouter.patch("/:id",updateTheater );
theaterRouter.delete("/:id", deleteTheater);

export{ theaterRouter };
