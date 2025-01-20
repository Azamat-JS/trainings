const {Router} = require('express');
const router = Router();

const {getBooks, addBook, deleteBook} = require('../controllers/books')

router.route('/books').get(getBooks).post(addBook)
router.route('/books/:id').delete(deleteBook)


module.exports = router;