const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    price: {
        type: Number,
        required: [true, 'must provide price'],
    },
    author:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true  }]
})


module.exports = mongoose.model('Book', BookSchema)