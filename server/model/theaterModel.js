import mongoose from "mongoose";
const seat=mongoose.Schema({
    row: {type:String, required:true},
    seatNumber: [{type:String, required:true}]
});
const theaterSchema=mongoose.Schema({
    name: {type:String, required:true},
    address: {type:String, required:true},
    city:{type:String, required:true},
    screeens:[{type:String, required:true}],
    timings: [{type:Number, required:true}],
    Seats:[{type:seat, required:true}],
    movies_id:[{type:String, required:true}]
})


const theaterModel=mongoose.model('theaters',theaterSchema)

export  {theaterModel};