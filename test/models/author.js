const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    age: {
        type: Number,
        required: [true, 'must provide age'],
    }
});

module.exports = mongoose.model('Author', AuthorSchema);