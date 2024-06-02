import { connect } from './config/database.js'
import express from 'express'

const PORT = process.env.PORT || 3000

const api = express()
api.use(express.json)

// aqui van las rutas
connect().then(() => {
  api.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
  })
})
