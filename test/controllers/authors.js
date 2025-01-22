const Author = require("../models/author");
const Book = require("../models/book");
const mongoose = require("mongoose");

const getAuthors = async (req, res) => {
  const authors = await Author.find({});
  res.status(200).json({ authors });
};

const addAuthor = async (req, res) => {
try {
  const { name, age } = req.body;
  
  const author = new Author({
    name,
    age,
    books: []
  });
 await author.save();
  res.status(201).json({ author });
} catch (error) {
  res.status(500).json({ msg: error.message });
}
}
module.exports = {
  getAuthors,
  addAuthor,
};
