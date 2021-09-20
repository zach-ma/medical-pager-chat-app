import mongoose from "mongoose";

// create mongoose schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectorFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

// turn schema into model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
