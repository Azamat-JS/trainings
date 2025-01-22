const Book = require('../models/book')
const Author = require('../models/author')


const getBooks = async(req, res) => {
    try {
        const books = await Book.find({}).populate('author', 'name')
        res.status(200).json({books})   
    } catch (error) {
      res.status(500).json({msg: error.message}) 
    } 
}

const addBook = async(req, res) => {
  try {
    const {name, price, authorName} = req.body

    const author = await Author.findById(authorId)
    if(!author){
      res.status(404).json({msg: 'author not found'})
    }

    const book = new Book({
      name,
      price,
      author: authorId
    })

    await book.save()
    res.status(201).json({book})
  } catch (error) {
    res.status(500).json({msg: error.message})
  }
}

const deleteBook = async(req, res) => {
  try {
    const {id} = req.params

    const book = await Book.findByIdAndDelete(id)
    if(!book){
      res.status(404).json({msg: 'book not found'})
    }
    res.status(200).send('book deleted')
  }catch (error) {
    res.status(500).json({msg: error.message})
  }
}
        

module.exports = {
    getBooks,
    addBook,
    deleteBook
}