import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import { movieRouter } from "./routes/movieRoute.js";
import { theaterRouter } from "./routes/theaterRoute.js";
import { UserRouter } from "./routes/userRoute.js";
import { bookingRouter } from "./routes/bookedMoviesRoute.js";
import { showsRouter } from "./routes/showsRouter.js";

dotenv.config();
mongoose
  .connect(process.env.DATABASE_URL)
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB");
  });

const app = express();
app.use(express.json());

app.use("/movies", movieRouter);
app.use("/theater", theaterRouter);
app.use("/user", UserRouter);
app.use('/bookmovie',bookingRouter)
app.use('/shows',showsRouter)

app.listen(8000, () => {
  console.log("server started");
});
