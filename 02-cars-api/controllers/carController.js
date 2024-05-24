import Car from '../models/Car.js'

// create
const createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body)
    res.status(201).json(newCar)
  } catch (error) {
    res.status(400).json({ message: 'Error creatin a new car: ', error })
  }
}
// read
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({ isActive: true })
    res.status(200).json(cars)
  } catch (error) {
    res.status(400).json({ message: `Error gettin cars: ${error}` })
  }
}

const getOneCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id)
    res.status(200).json(car)
  } catch (error) {
    res.status(400).json({ message: `Error gettin car: ${error}` })
  }
}

// update
const updateCar = async (req, res) => {
  // para actualizar normalmente verificacmos si existe el id
  // con mongoose existe una funcion findByIdAndUpdate
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedCar)
  } catch (error) {
    res.status(400).json({ mressage: `Error updating car ${error}` })
  }
}
// delete
const deleteCarById = async (req, res) => {
  // Borrado fisico, Si el query string ? destry = true, se borra realmente de la bsae de datos
  if (!req.params.id) {
    return res.status(400).json({ message: 'CAR ID is required' })
  }

  if (req.query.destroy === 'true') {
    try {
      const deleteCar = await Car.findByIdAndDelete(req.params.id)
      if (deleteCar === null) {
        return res.status(404).json({ message: 'Car not found for delete' })
      }
      return res.status(204).json()
    } catch (error) {
      res.status(200).json({ message: `Error od deliting car ${error}` })
    }
    // Borrado logico, si no se envia el query string ?destroy === false, se cambia el campo isActive a false
  } else {
    try {
      const updateCar = await Car.findByIdAndUpdate(req.params.id, { isActive: false }, { new: false })
      if (updateCar === null || updateCar.isActive === false) {
        return res.status(404).json({ message: 'Deleted car not found' })
      }
      return res.status(204).json()
    } catch (error) {
      res.status(200).json({ message: `Error od deliting car ${error}` })
    }
  }
}
export {
  createCar,
  getAllCars,
  getOneCar,
  updateCar,
  deleteCarById
}
