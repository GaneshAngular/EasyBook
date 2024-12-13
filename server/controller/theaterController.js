import { showsModel } from '../model/showsModel.js'
import {theaterModel} from '../model/theaterModel.js'
import { log } from 'console';



const getTheaters=async(req,res)=>{
        return res.send(await theaterModel.find({}))
}

const addTheater=async(req,res)=>{
    theaterModel.create(req.body)
    
    return res.status(201).send("Theater added")
}

const getTheatersByMovie=async (req,res)=>{
        const id=req.params.id
       let theaterList=[]
        const theaters=await theaterModel.find({})
        theaters.forEach(theater=>{
            if(theater.movies_id.includes(id)){
                theaterList.push(theater)
            }
        })

        return res.status(200).send(theaterList.length!=0?theaterList:'No Theater found')
}

const getTheatersById=async(req,res)=>{
    const id=req.params.id
    return res.send(await theaterModel.findById(id))
}

const getTheatersByMovieandCity=async(req,res)=>{
    const id=req.params.id
    const cityn=req.params.city
    const theaterId=[]
    const today=new Date().toString()
     let data=await showsModel.find({city:cityn, movie_id:id}).populate('theater_id')
 
        console.log(data);
        
     data.map(show=>!theaterId.includes(show.theater_id) && theaterId.push(show.theater_id) )
     
    
   
    
     return res.send(theaterId)
    }
   
const updateTheater=async(req,res)=>{

}

const deleteTheater=async(req,res)=>{

}

export{getTheaters, addTheater, getTheatersById, updateTheater, deleteTheater,getTheatersByMovie,getTheatersByMovieandCity}