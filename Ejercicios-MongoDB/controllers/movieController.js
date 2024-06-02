import Movie from '../models/Movie.js'

// create
const createMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body)
    res.status(200).json(newMovie)
  } catch (error) {
    return res.status(400).json({ message: `Error al crear pelicula ${error}` })
  }
}
// read
const readMovie = async (req, res) => {
  try {
    const movies = await Movie.find()
    res.status(200).json(movies)
  } catch (error) {
    return res.status(400).json({ message: `Error al leer peliculas ${error}` })
  }
}
// update

// delete

export {
  createMovie,
  readMovie
}
