import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connect = async () => {
  mongoose.connect(process.env.DB_CONNECT_URI)
  const { connection } = await mongoose

  connection.once('open', () => {
    console.log('Conectado correctamente a la base de datos')
  })

  connection.on('error', () => {
    console.log('Error al conectarse a la base de datos')
  })
}

export { connect }
