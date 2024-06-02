import express from 'express'
import { connect } from './config/database.js'
import movieRoutes from './routes/movieRoutes.js'

const PORT = process.env.PORT || 3000

const api = express()

api.use(express.json())

api.use('/api/v1', movieRoutes)

connect().then(() => {
  api.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
  })
})
