import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String },
    creator: { type: String },
    message: { type: String },
    tags: { type: [String] },
    selectedFile: { type: String },
    likeCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
})

const Post = mongoose.model("post", PostSchema);
export default Post;