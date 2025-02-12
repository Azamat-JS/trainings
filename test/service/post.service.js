const Post = require('../models/postSchema')
const fileService = require('./file.service')

class PostService {
    async create(post, picture){
        const fileName = fileService.save(picture)
        const newFile = await Post.create({...post, picture: fileName})
        return newFile
    }

    async getAll(){
        const data = await Post.find().populate('author')
        return data
    }

    async getOne(id){
      const singlePost = await Post.findById(id)
      return singlePost
    }

    async edit(post, id){
        const editPost = await Post.findByIdAndUpdate(id, post, {new:true, runValidators: true})
        return editPost
    }

    async delete(id){
        const deletedPost = await Post.findByIdAndDelete(id)
        return deletedPost
    }
}

module.exports = new PostService()