import express from "express";
import { image_Storage_URL } from "../constants/URLS.js"

import multer from "multer"
import { createMovie, deleteMovie, getMovies, getMoviesById, updateMovie ,getMoviesByCity} from "../controller/movieController.js";
import { deleteModel } from "mongoose";
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
movieRouter.get("/:id", getMoviesById);
movieRouter.get('/:id/:city', getMoviesByCity);
movieRouter.post("/",upload.single('poster'),createMovie);
movieRouter.patch("/:id",updateMovie);
movieRouter.delete("/:id",deleteMovie);

export{movieRouter}
