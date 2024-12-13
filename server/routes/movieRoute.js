import express from "express";
import { image_Storage_URL } from "../constants/URLS.js"
import fs from 'fs'
import multer from "multer"
import { createMovie, deleteMovie, getMovies, getMoviesById, updateMovie ,getMoviesByCity} from "../controller/movieController.js";
import { deleteModel } from "mongoose";
import { log } from "console";
import { dirname } from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "/home/am-pc-10/Documents/Programs/EasyBook/EasyBook/src/assets/images")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage })
  
const movieRouter = express.Router();

movieRouter.get("/", getMovies);
movieRouter.get('/city/:city', getMoviesByCity);
movieRouter.get("/:id", getMoviesById);
movieRouter.post("/",upload.single('poster'),createMovie);
movieRouter.patch("/:id",updateMovie);
movieRouter.delete("/:id",deleteMovie);

export{movieRouter}
