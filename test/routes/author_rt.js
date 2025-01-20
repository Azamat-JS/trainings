const {Router} = require('express');
const router = Router();
const {getAuthors, addAuthor} = require('../controllers/authors')


router.route('/authors').get(getAuthors).post(addAuthor)


module.exports = router;