import express from 'express'
import { connect } from './config/database.js'
import carRoutes from './routes/CarRoutes.js'

const PORT = process.env.PORT || 3000

const api = express()

api.use(express.json())

api.use('/api/v1', carRoutes)

connect().then(() => {
  api.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  })
})
