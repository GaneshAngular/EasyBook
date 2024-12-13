
import { log } from "console"
import { movieModel } from "../model/movieModel.js"
import { showsModel } from "../model/showsModel.js"
const getMovies= async(req,res)=>{
    return res.send(await movieModel.find({}))
}


 

const getMoviesById= async(req,res)=>{
    const id=req.params.id
    const movie= await movieModel.findById(id)
return res.send(movie)
}
const getMoviesByCity=async(req,res)=>{
    
    const city=req.params.city
    const shows= await showsModel.find({city:city}).populate('movie_id') 
    
    let ids=[]
    if(shows.length){
    
         shows.forEach((show)=>{
             !ids.includes(show.movie_id)&&ids.push(show.movie_id)
         })
         
         
    //      const moviePromises = ids.map((movie_id) => movieModel.findById(movie_id));
    //    const movies = await Promise.all(moviePromises);
         return res.send(ids)
     }
    shows.length==0&& res.send([])
    }

    

const createMovie= async(req,res)=>{
    const data=req.body
    const file=req.file || null
    if(file){
        data.poster= file.originalname
        

    }
    movieModel.create(data)
   
   return res.send("movie created")
}

const updateMovie=async(req,res)=>{
    const id=req.params.id
    const response=await movieModel.find({_id:id})
    if(!response.length){
        return res.send("movie Not Found");
    }
    
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


export{getMovies,getMoviesById,createMovie,updateMovie,deleteMovie,getMoviesByCity}