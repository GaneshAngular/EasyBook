import mongoose from "mongoose";

const theaterSchema=mongoose.Schema({
    name: {type:String, required:true},
    address: {type:String, required:true},
    city:{type:String, required:true},
    screeens:[{type:String, required:true}],
    timings: [{type:Number, required:true}],
    movies_id:[{type:String, required:true}]
})


const theaterModel=mongoose.model('theaters',theaterSchema)

export  {theaterModel};