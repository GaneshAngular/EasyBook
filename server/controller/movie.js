import { movieModel } from "../model/movie.js"

const getMovies= async(req,res)=>{
    return res.send(await movieModel.find({}))
}

const getMoviesById= async(req,res)=>{
    const id=req.params.id
    const movie= await movieModel.findById(id)
return res.send(movie)
}

const createMovie= async(req,res)=>{
    const data=req.body
    movieModel.create(data)
    console.log(data);
   return res.send("movie created")
}

const updateMovie=async(req,res)=>{
    const id=req.params.id
    const response=await movieModel.find({_id:id})
    if(!response.length){
        return res.send("movie Not Found");
    }
    console.log(response);
    const data=req.body
     await movieModel.findByIdAndUpdate(id,data)
    return res.send("movie updated")
}

const deleteMovie=async(req,res)=>{
     const id=req.params.id
    const data= await movieModel.findByIdAndDelete(id)
    if(!data){
        return res.send("movie Not Found");
    }
     return res.send("movie deleted")
}


export{getMovies,getMoviesById,createMovie,updateMovie,deleteMovie}