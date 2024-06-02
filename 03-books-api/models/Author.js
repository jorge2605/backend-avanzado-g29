import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  bio: String,
  birthDate: { type: Date },
  isActive: { type: Boolean, default: true }
}, { timeStamp: true })

const Author = mongoose.model('Author', authorSchema)

export default Author
