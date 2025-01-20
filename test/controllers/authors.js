const Author = require("../models/author");
const mongoose = require("mongoose");

const getAuthors = async (req, res) => {
  const authors = await Author.find({});
  res.status(200).json({ authors });
};

const addAuthor = async (req, res) => {
  const { name, age } = req.body;
  const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    name,
    age,
  });
 await author.save();
  res.status(201).json({ author });
};

module.exports = {
  getAuthors,
  addAuthor,
};
