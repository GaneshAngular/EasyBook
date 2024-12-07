import express from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controller/userController.js";

const UserRouter=express.Router()

UserRouter.get('/',getUsers)

UserRouter.post('/',createUser )

UserRouter.get('/:id', getUserById)

UserRouter.patch('/:id',updateUser)

UserRouter.delete('/:id',deleteUser)
export{
    UserRouter
}