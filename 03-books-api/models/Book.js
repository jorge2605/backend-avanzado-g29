import mongoose from 'mongoose'

const genreEnum = ['Fiction', 'Non-Fiction', 'Since Fiction', 'Fantasy', 'Mystery', 'Thriller', 'Romance', 'Horror', 'Biography', 'Memoir',
  'Self-Help', 'Cookbook', 'Poetry', 'History'
]

const bookSchema = new mongoose.Schema({
  tittle: { type: String, required: true },
  summary: String,
  genre: { type: String, required: true, enum: genreEnum },
  publishDate: { type: Date }, // YYYY-MM-DD
  autors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author', require: true }],
  publisher: { type: String, required: true },
  price: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  isbn: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, { timeSatmp: true })

const Book = mongoose.model('book', bookSchema)

export default Book
