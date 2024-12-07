import mongoose from "mongoose";

const movieSchema=mongoose.Schema({
    title: {type:String, required:true},
    // Image:{type:File, required:false},
    duration:{type:Number, required:true},
    director: {type:String, required:true},
    releaseDate: {type:String, required:true},
    genre: {type:String, required:true},
    languages:[{type:String, required:true}],
    casts: [{type:String, required:true}],
    rating: {type:Number, required:true},
    like:{type:Number, required:true},
    dislike:{type:Number, required:true}
})


const movieModel=mongoose.model('movie',movieSchema)

export{movieModel};