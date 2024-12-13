import mongoose from "mongoose";

const userSchema=mongoose.Schema({
      name: {type:String, required:true},
      email: {type:String, required:true, unique:true},
      password: {type:String, required:true},
      mobile:{type:String, required:true, unique:true},
      userType:{type:String, required:true}
})

const userModel=mongoose.model('users',userSchema)

export{
    userModel
}