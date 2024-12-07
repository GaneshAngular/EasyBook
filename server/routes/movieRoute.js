import express from "express";

import { createMovie, getMovies, getMoviesById, updateMovie } from "../controller/movieController.js";
import { deleteModel } from "mongoose";

const movieRouter = express.Router();

movieRouter.get("/", getMovies);
movieRouter.get("/:id", getMoviesById);
movieRouter.post("/", createMovie);
movieRouter.patch("/:id",updateMovie);
movieRouter.delete("/:id",deleteModel);

export{movieRouter}
