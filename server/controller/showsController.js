import { showsModel } from "../model/showsModel.js"


const getShows=async(req,res)=>{
      const shows=await showsModel.find({}).populate('movie_id').populate('theater_id')
        return res.send(shows)
}

const organiseShow=async(req,res)=>{
      const data=req.body
      const response=await showsModel.create(data)
    // console.log(res);
      return res.status(201).json(response)

}
const getShowsByTime=async(req,res)=>{
      const time=req.params.time
      const tid=req.params.tid
      const mid=req.params.mid
      return res.send(await showsModel.find({time:time,theater_id:tid,movie_id:mid}).populate('movie_id').populate('theater_id'))
}
const getShowsByMovie=async(req,res)=>{
    const id=req.params.id
      return res.send(await showsModel.find({movie_id:id}))
}
      
const getShowsByTheater=async(req,res)=>{
      const id=req.params.id
      return res.send(await showsModel.find({theater_id:id}))
}

const getShowsByDate=async(req,res)=>{
      const date=req.params.date
      return res.send(await showsModel.find({date:date}))
}

const deleteShow=async(req,res)=>{
      const id=req.params.id
     const respons= await showsModel.findByIdAndDelete(id)
    
     
      return res.status(204).send("Show deleted")
}
const updateShow=async(req,res)=>{
      const id=req.params.id
      const respons= await showsModel.findByIdAndUpdate(id,req.body)
    
     
      return res.status(204).send("Show Updated")
}

export{
    getShows,
    organiseShow,
    getShowsByTheater,
    getShowsByDate,
    getShowsByMovie,
    deleteShow,
    getShowsByTime,
    updateShow
}