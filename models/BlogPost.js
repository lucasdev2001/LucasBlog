import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,'Please provide a title for this post']
    },
    subtitle: {
        type: String,
        required: [true,'Please provide a subtitle for this post']
    },
    content: {
        type: String,
        required: [true,'Please provide a content for this post'],
    },

})

export default mongoose.models.blogPost || mongoose.model('blogPost',blogPostSchema);