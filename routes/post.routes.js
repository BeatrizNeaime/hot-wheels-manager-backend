import express from 'express'
import PostsController from '../controllers/posts.controller.js'

const postRoute = express.Router()

postRoute.get('/posts', PostsController.getPosts)
postRoute.post('/posts', PostsController.createPosts)

export default postRoute