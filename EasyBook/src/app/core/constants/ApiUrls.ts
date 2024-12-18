
const SERVER_URL='http://localhost:8000'


const MOVIE_URLS={
    getMovies:'/movies/',
    getMovie:'/movies/',
    updateMovie:'/movies',
    deleteMovie:'/movies/'
}

const THEATER_URLS={
  getTheaters:'/theater/',
  getTheater:'/theater/',
  updateTheater:'/theater',
  deleteTheater:'/theater/',
  getTheatersByCityAndMovie:'/theater/theater/'

}

const SHOWS_URL={
    getShows:'/shows/',
    getShow:'/shows/',
    updateShow:'/shows/',
    deleteShow:'/shows/'
}


export {SERVER_URL, MOVIE_URLS, THEATER_URLS, SHOWS_URL}
