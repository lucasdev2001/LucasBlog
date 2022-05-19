import dbConnect from "../../../lib/dbConnect";
import BlogPost from "../../../models/BlogPost";

export default async function handler(req, res) {
    const {
        query: {
            id
        },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const blogPost = await BlogPost.findById(id);
                if (!blogPost) {
                    return res.status(400).json({
                        success: false
                    })
                }
                res.status(200).json(blogPost);
            } catch (error) {
                return res.status(400).json({
                    success: false
                })
            }
            break;
        case 'PUT':
            try {
                const blogPost = await BlogPost.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                })
                if (!blogPost) {
                    return res.status(400).json({
                        success: false
                    })
                }
                res.status(200).json({
                    success: true,
                    blogPost,
                });
            } catch (error) {
                return res.status(400).json({
                    success: false
                })
            }
            break;
        case 'DELETE':

            try {
                const blogPost = await BlogPost.findByIdAndDelete({
                    _id: id
                });
                if (!blogPost) {
                    return res.status(400).json({
                        success: false
                    })
                }
                res.status(200).json({
                    success: true
                })
            } catch (error) {
                return res.status(400).json({
                    success: false
                })
            }

            break;
        default:
            res.status(400).json({
                success: false
            })
            break;
    }
}