import mongoose, { mongo } from "mongoose";


const price=mongoose.Schema({
    seatType:{type:String},
    price:{type:Number}
}
,
{ _id: false })
const showsSchema=mongoose.Schema({
    movie_id:{type:mongoose.Schema.Types.ObjectId,ref:'movie', required:true},
    theater_id:{type:mongoose.Schema.Types.ObjectId,ref:'theaters', required:true},
    date:{type:Date, required:true},
    time:{type:String, required:true},
    city:{type:String, required:true},
    seatsFilled:[{type:String, required:true}],
    prices:[{type:price, required:true}]
})


const showsModel=mongoose.model('shows',showsSchema)

export{
    showsModel
}