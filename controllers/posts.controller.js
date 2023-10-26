import Post from "../models/Post.model.js";

class PostsController {
    getPosts = async (req, res, next) => {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    createPosts = async (req, res, next) => {
        const post = req.body;
        try {
            const newPost = await Post.create(post);
            res.status(201).json(newPost);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    }
}

export default new PostsController;