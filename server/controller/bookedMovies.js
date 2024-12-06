

const getBookedMovies=async(req,res)=>{
    const id=req.params.id
    return res.send(await bookedMoviesModel.findById(id))
}
const getBookedMoviesById=async(req,res)=>{
}

const bookMovie=async(req,res)=>{
    const data=req.body
    bookedMoviesModel.create(data)
    return res.status(201).send(" movie Booked")
}

const cancelBookedMovie=async(req,res)=>{
}