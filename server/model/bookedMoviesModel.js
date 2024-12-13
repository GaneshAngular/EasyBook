import mongoose from "mongoose";

const bookedMoviesSchema=mongoose.Schema({
    user_id:{type:String,required:true},
    show_id:{type:String,required:true},
    seat_numbers:[{type:String, required:true}],
    isConfirmed:{type:Boolean, required:true}
},{
    timestamps:true
})


const bookedMoviesModel=mongoose.model('bookedMovies',bookedMoviesSchema)
export{
    bookedMoviesModel
}