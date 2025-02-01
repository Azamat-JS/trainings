const PostService = require('../service/post.service')
const checkTime = require('../middleware/checkTime')

class PostController {
  async create(req, res, next){
    try {
      const newPost = await PostService.create(req.body, req.files.picture, author)
      res.status(201).json(newPost)   
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next){
    try {
      console.log(req.checkTime);
      
      const allPosts = await PostService.getAll()
      res.status(200).json(allPosts)
    } catch (error) {
     next(error) 
    }
  }

  async getOne(req, res, next){
    try {
      const onePost = await PostService.getOne(req.params.id)
      res.status(200).json(onePost)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next){
    try {
      const {body, params} = req
      const editedPost = await PostService.edit(body, params.id)
      res.status(200).json(editedPost)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next){
    try{
    const deletedPost = await PostService.delete(req.params.id)
    res.status(200).send('post was edited successfully')
  }catch(error){
    next(error)
  }
}
}

module.exports = new PostController()