import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
  name: { type: String, require: true },
  genero: { type: String },
  director: { type: String, require: true },
  duracion: Number,
  actores: { type: JSON, require: true },
  descripcion: String
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie
