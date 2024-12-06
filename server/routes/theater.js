import express from "express";
import { addTheater, deleteTheater, getTheaters, getTheatersById, getTheatersByMovie, updateTheater } from "../controller/theater.js";

const theaterRouter = express.Router();

theaterRouter.get("/",getTheaters);
theaterRouter.get("/:id", getTheatersById);
theaterRouter.get("/movie/:id", getTheatersByMovie);
theaterRouter.post("/", addTheater);
theaterRouter.patch("/:id",updateTheater );
theaterRouter.delete("/:id", deleteTheater);

export{ theaterRouter };
