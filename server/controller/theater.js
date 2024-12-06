import {theaterModel} from '../model/theater.js'



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

const updateTheater=async(req,res)=>{

}

const deleteTheater=async(req,res)=>{

}

export{getTheaters, addTheater, getTheatersById, updateTheater, deleteTheater,getTheatersByMovie}