import express from 'express'
import * as carController from '../controllers/carController.js'

const carRoutes = express.Router()

carRoutes.post('/cars', carController.createCar)
carRoutes.get('/cars', carController.getAllCars)
carRoutes.get('/cars/:id', carController.getOneCar)
carRoutes.patch('/cars/:id', carController.updateCar)
carRoutes.delete('/cars/:id', carController.deleteCarById)

export default carRoutes
