import mongoose from "mongoose";

const bookedMoviesSchema=mongoose.Schema({
    user_id:{type:String,required:true},
    movie_id:{type:String, required:true},
    theater_id:{type:String, required:true},
    screenType: {type:String, required:true},
    seat_numbers:[{type:Number, required:true}],
    date:{type:Date, required:true},
    time:{type:String, required:true},
    isConfirmed:{type:Boolean, required:true}
},{
    timestamps:true
})


const bookedMoviesModel=mongoose.model('bookedMovies',bookedMoviesSchema)
export{
    bookedMoviesModel
}