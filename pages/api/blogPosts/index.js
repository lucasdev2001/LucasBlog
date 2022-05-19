import dbConnect from "../../../lib/dbConnect";
import BlogPost from "../../../models/BlogPost";

export default async function handler(req, res) {
    const {
        method
    } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const blogPosts = await BlogPost.find({});
                res.status(200).json(blogPosts);
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;

        case 'POST':
            try {
                const blogPost = await BlogPost.create(
                    req.body
                )
                res.status(201).json({
                    success: true,
                    data: blogPost
                })
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;

        default:
            res.status(400).json({
                success: false
            });
            break;
    }
}