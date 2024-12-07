import { showsModel } from "../model/showsModel.js"


const getShows=async(req,res)=>{
        return res.send(await showsModel.find({}).populate('prices'))
}

const organiseShow=async(req,res)=>{
      const data=req.body
      const response=await showsModel.create(data)
    // console.log(res);
      return res.status(201).json(response)

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
     console.log(respons);
     
      return res.status(204).send("Show deleted")
}

export{
    getShows,
    organiseShow,
    getShowsByTheater,
    getShowsByDate,
    getShowsByMovie,
    deleteShow
}