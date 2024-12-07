import { userModel } from "../model/userModel.js"


const  getUsers=async(req,res)=>{
   const data= await userModel.find({})
  return res.send(data)
}

const getUserById=async(req,res)=>{
    const id=req.params.id
    const data= await userModel.findById(id)
    return res.send(data)
}

const createUser=async(req,res)=>{
     const data=req.body
    await userModel.create(data)
   return res.status(201).send(data)
}

const updateUser=async(req,res)=>{

}

const deleteUser=async(req,res)=>{

}

export{
    getUsers,createUser, getUserById, updateUser, deleteUser
}