const mongoose = require('mongoose');
const book = require('./book');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    age: {
        type: Number,
        required: [true, 'must provide age'],
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    }]

});

module.exports = mongoose.model('Author', authorSchema);