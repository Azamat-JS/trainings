const {Router} = require('express');
const router = Router();
const postController = require('../controllers/post.controller')
const logger = require('../middleware/logger')

router.get('/get', postController.getAll)
router.post('create', logger, postController.create)
router.get('/get-one/:id', postController.getOne)
router.put('/update/:id', postController.edit)
router.delete('/delete/:id', postController.delete)

module.exports = router;